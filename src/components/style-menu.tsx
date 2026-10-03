"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons/icon";
import { buttonVariants } from "@/components/adw/button";
import {
  ACCENTS,
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT,
  isAccent,
  type AccentId,
} from "@/lib/accent";
import { NAV } from "@/content/site";

const STYLES = [
  { id: "system", label: "Follow system style" },
  { id: "light", label: "Light style" },
  { id: "dark", label: "Dark style" },
] as const;

/* Accent lives on <html data-accent>; subscribe to it without effects. */
function subscribeAccent(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributeFilter: ["data-accent"] });
  return () => observer.disconnect();
}
function readAccent(): AccentId {
  const value = document.documentElement.dataset.accent;
  return isAccent(value) ? value : DEFAULT_ACCENT;
}

function setAccent(id: AccentId) {
  document.documentElement.dataset.accent = id;
  try {
    localStorage.setItem(ACCENT_STORAGE_KEY, id);
  } catch {
    /* Storage can be blocked; the choice still applies to this page view. */
  }
}

const mounted = () => () => {};

/*
 * The primary menu of a GNOME app: style switcher (system, light, dark),
 * accent colors as in GNOME Settings, and on small screens the page links.
 */
export function StyleMenu() {
  const { theme, setTheme } = useTheme();
  const accent = useSyncExternalStore(subscribeAccent, readAccent, () => DEFAULT_ACCENT);
  const isClient = useSyncExternalStore(mounted, () => true, () => false);
  const current = isClient ? (theme ?? "system") : null;

  return (
    <>
      <button
        type="button"
        popoverTarget="style-menu"
        aria-label="Main menu"
        className={buttonVariants({ variant: "flat", size: "icon" })}
      >
        <Icon name="open-menu" />
      </button>
      <div
        id="style-menu"
        popover="auto"
        className="animate-popover-in fixed top-[52px] right-[12px] left-auto w-[min(300px,calc(100vw-24px))] origin-top-right"
      >
        <div className="flex flex-col gap-[6px] rounded-card bg-popover p-[6px] text-fg shadow-[var(--popover-shadow)]">
          <fieldset className="flex justify-center gap-[18px] px-1 pt-1 pb-[6px]">
            <legend className="sr-only">Style</legend>
            {STYLES.map((s) => (
              <label key={s.id} className="relative cursor-pointer" title={s.label}>
                <input
                  type="radio"
                  name="style"
                  value={s.id}
                  checked={current === s.id}
                  onChange={() => setTheme(s.id)}
                  className="peer sr-only"
                />
                <span className="sr-only">{s.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "block size-[44px] overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgb(0_0_6/15%)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[color-mix(in_oklab,var(--accent-bg)_70%,transparent)]",
                    "ring-offset-2 ring-offset-popover peer-checked:ring-2 peer-checked:ring-accent-bg",
                    s.id === "light" && "bg-white",
                    s.id === "dark" && "bg-[#222226]",
                    s.id === "system" && "bg-[linear-gradient(135deg,#fff_50%,#222226_50%)]",
                  )}
                />
                {current === s.id ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-3px] bottom-[-3px] flex size-[18px] items-center justify-center rounded-full bg-accent-bg text-accent-fg"
                  >
                    <Icon name="object-select" size={10} />
                  </span>
                ) : null}
              </label>
            ))}
          </fieldset>

          <fieldset className="border-t border-border px-1 pt-2 pb-1">
            <legend className="caption float-left mb-[9px] w-full font-bold text-dim">
              Accent color
            </legend>
            <div className="clear-both grid grid-cols-9 justify-items-center gap-[3px]">
              {ACCENTS.map((a) => (
                <label key={a.id} className="relative cursor-pointer" title={a.label}>
                  <input
                    type="radio"
                    name="accent"
                    value={a.id}
                    checked={isClient && accent === a.id}
                    onChange={() => setAccent(a.id)}
                    className="peer sr-only"
                  />
                  <span className="sr-only">{a.label}</span>
                  <span
                    aria-hidden="true"
                    className="flex size-[24px] items-center justify-center rounded-full text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-fg"
                    style={{ background: a.color }}
                  >
                    {isClient && accent === a.id ? <Icon name="object-select" size={12} /> : null}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <nav aria-label="Sections" className="flex flex-col border-t border-border pt-[6px] md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => document.getElementById("style-menu")?.hidePopover()}
                className="flex h-[36px] items-center rounded-button px-[12px] text-[0.9375rem] text-fg no-underline hover:bg-hover"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
