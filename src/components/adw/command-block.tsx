"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons/icon";

type CopyState = "idle" | "copied" | "failed";

/* A shell command with a copy button, styled like a GNOME Console line. */
export function CommandBlock({
  command,
  className,
}: {
  command: string;
  className?: string;
}) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(command);
      setState("copied");
    } catch {
      setState("failed");
    }
    timer.current = setTimeout(() => setState("idle"), 2000);
  }

  const label =
    state === "copied" ? "Copied" : state === "failed" ? "Copy failed, select the text" : "Copy";

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-card bg-view py-[6px] pr-[6px] pl-2 shadow-[inset_0_0_0_1px_var(--border-color)]",
        className,
      )}
    >
      <code
        tabIndex={0}
        className="min-w-0 flex-1 overflow-x-auto py-[6px] text-[0.875rem] leading-normal whitespace-pre text-fg">
        <span aria-hidden="true" className="text-dim select-none">
          ${" "}
        </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className={cn(
          "inline-flex h-[34px] shrink-0 items-center gap-[6px] rounded-button px-[10px] text-sm font-bold transition-colors",
          state === "copied" ? "text-accent" : "text-fg hover:bg-hover active:bg-active",
        )}
      >
        <Icon name={state === "copied" ? "object-select" : "edit-copy"} />
        <span className={cn(state === "idle" && "sr-only sm:not-sr-only")}>{label}</span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {state === "copied" ? "Command copied to clipboard" : state === "failed" ? "Copy failed" : ""}
      </span>
    </div>
  );
}
