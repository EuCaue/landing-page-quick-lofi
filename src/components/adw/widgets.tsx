import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons/icon";

/*
 * Static renderings of GTK widgets used as row suffixes. They illustrate a
 * setting; they are not form controls, so they stay out of the a11y tree.
 */

export function SwitchIllustration({ on = true }: { on?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-[26px] w-[48px] items-center rounded-full p-[3px]",
        on ? "bg-accent-bg" : "bg-active",
      )}
    >
      <span
        className={cn(
          "size-[20px] rounded-full bg-white shadow-[0_2px_4px_rgb(0_0_6/20%)]",
          on && "translate-x-[22px]",
        )}
      />
    </span>
  );
}

export function DropdownIllustration({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-[34px] items-center gap-[9px] rounded-button px-[10px] text-[0.9375rem] text-fg"
    >
      {label}
      <Icon name="expander-arrow" size={12} className="rotate-180" />
    </span>
  );
}

export function SliderIllustration({ value }: { value: number }) {
  return (
    <span aria-hidden="true" className="relative inline-flex h-[18px] w-[120px] items-center">
      <span className="h-[4px] w-full rounded-full bg-active" />
      <span
        className="absolute left-0 h-[4px] rounded-full bg-accent-bg"
        style={{ width: `${value}%` }}
      />
      <span
        className="absolute size-[16px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_1px_rgb(0_0_6/10%),0_2px_4px_rgb(0_0_6/20%)]"
        style={{ left: `${value}%` }}
      />
    </span>
  );
}

export function PlayButtonIllustration() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-[34px] items-center justify-center rounded-full bg-hover text-fg"
    >
      <Icon name="media-playback-start" size={14} className="translate-x-[1px]" />
    </span>
  );
}

/* GtkShortcutLabel: keycaps joined by "+". */
export function Keycaps({
  keys,
  className,
}: {
  keys: string[];
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-[5px]", className)}>
      {keys.map((key, i) => (
        <span key={`${key}-${i}`} className="inline-flex items-center gap-[5px]">
          {i > 0 ? (
            <span aria-hidden="true" className="text-dim">
              +
            </span>
          ) : null}
          <kbd className="inline-flex h-[28px] min-w-[28px] items-center justify-center rounded-button bg-hover px-[8px] font-sans text-[0.8125rem] font-bold text-fg shadow-[inset_0_-2px_0_var(--border-color)]">
            {key}
          </kbd>
        </span>
      ))}
    </span>
  );
}

/* Small rounded label, like the version badge in AdwAboutDialog. */
export function Pill({
  children,
  className,
  tone = "accent",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "neutral";
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center rounded-full px-2 text-[0.8125rem] font-bold numeric",
        tone === "accent" ? "bg-accent-soft text-accent" : "bg-hover text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
