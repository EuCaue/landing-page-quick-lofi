"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export type ToggleItem = { id: string; label: string };

/*
 * AdwToggleGroup / view switcher. Implements the WAI-ARIA tabs pattern:
 * arrow keys, Home and End move between tabs, selection follows focus.
 * Each tab controls the panel `${idPrefix}-panel-${id}`.
 */
export function ToggleGroup({
  items,
  value,
  onValueChange,
  label,
  idPrefix,
  className,
}: {
  items: ToggleItem[];
  value: string;
  onValueChange: (id: string) => void;
  label: string;
  idPrefix: string;
  className?: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (index + 1) % items.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    if (next < 0) return;
    e.preventDefault();
    onValueChange(items[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "inline-flex max-w-full gap-[3px] overflow-x-auto rounded-[9px] bg-hover p-[3px]",
        className,
      )}
    >
      {items.map((item, i) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${item.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onValueChange(item.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "h-[28px] shrink-0 whitespace-nowrap rounded-button px-[9px] text-sm sm:px-2 font-bold transition-[background-color,box-shadow] duration-150",
              selected
                ? "bg-view text-fg shadow-[0_1px_3px_rgb(0_0_6/12%),0_0_0_1px_rgb(0_0_6/4%)] dark:bg-[rgb(255_255_255/15%)]"
                : "text-fg hover:bg-hover",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  idPrefix,
  id,
  hidden,
  children,
  className,
}: {
  idPrefix: string;
  id: string;
  hidden: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="tabpanel"
      id={`${idPrefix}-panel-${id}`}
      aria-labelledby={`${idPrefix}-tab-${id}`}
      hidden={hidden}
      className={className}
    >
      {children}
    </div>
  );
}
