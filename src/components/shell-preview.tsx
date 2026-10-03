"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons/icon";
import { STATIONS, type Station } from "@/content/site";

export type ShellPreviewState = {
  open: boolean;
  /** Index into `stations`, or null when nothing plays. */
  current: number | null;
  paused: boolean;
  volume: number;
  /** Seconds played in the current playlist item. */
  elapsed: number;
};

export const DEFAULT_PREVIEW_STATE: ShellPreviewState = {
  open: true,
  current: 4,
  paused: false,
  volume: 84,
  elapsed: 2,
};

function formatTime(total: number) {
  const s = Math.floor(total % 60);
  const m = Math.floor((total / 60) % 60);
  const h = Math.floor(total / 3600);
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

/*
 * A working model of the Quick Lofi indicator and its popup menu in the
 * GNOME Shell top bar. It mirrors the extension: click a station to play,
 * click it again to pause, right-click to stop. The active station shows the
 * stop icon while playing and the pause icon while paused. No audio.
 */
export function ShellPreview({
  stations = STATIONS,
  initialState = DEFAULT_PREVIEW_STATE,
  className,
}: {
  stations?: Station[];
  initialState?: ShellPreviewState;
  className?: string;
}) {
  const [state, setState] = useState(initialState);
  const indicatorRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const { open, current, paused, volume, elapsed } = state;
  const playing = current !== null && !paused;
  const station = current !== null ? stations[current] : null;
  const duration = station?.playlist?.durationSeconds ?? 0;

  const set = (patch: Partial<ShellPreviewState>) =>
    setState((s) => ({ ...s, ...patch }));

  /* Advance the playlist clock while something with a duration plays. */
  useEffect(() => {
    if (!playing || duration === 0) return;
    const id = setInterval(() => {
      setState((s) => ({ ...s, elapsed: s.elapsed + 1 >= duration ? 0 : s.elapsed + 1 }));
    }, 1000);
    return () => clearInterval(id);
  }, [playing, duration]);

  function activate(index: number) {
    if (index === current) set({ paused: !paused });
    else set({ current: index, paused: false, elapsed: 0 });
  }

  function stop(index: number) {
    if (index === current) set({ current: null, paused: false, elapsed: 0 });
  }

  function skip(delta: number) {
    const from = current ?? 0;
    set({
      current: (from + delta + stations.length) % stations.length,
      paused: false,
      elapsed: 0,
    });
  }

  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <div className="relative isolate overflow-hidden rounded-window bg-desktop shadow-[var(--card-shadow)]">
        {/* Top bar */}
        <div className="flex h-[32px] items-center justify-between bg-shell px-[9px] text-[0.8125rem] font-bold text-shell-fg">
          <span aria-hidden="true" className="flex items-center gap-[5px] px-[6px]">
            <span className="h-[7px] w-[30px] rounded-full bg-shell-fg" />
            <span className="size-[7px] rounded-full bg-shell-fg/50" />
            <span className="size-[7px] rounded-full bg-shell-fg/50" />
          </span>
          <span aria-hidden="true" className="numeric absolute left-1/2 -translate-x-1/2">
            Fri 21:40
          </span>
          <span className="flex items-center gap-[3px]">
            <button
              ref={indicatorRef}
              type="button"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label="Quick Lofi indicator"
              onClick={() => set({ open: !open })}
              className={cn(
                "flex h-[24px] items-center rounded-full px-[9px] text-shell-fg transition-colors",
                open ? "bg-white/25" : "hover:bg-white/15",
                "focus-visible:outline-white",
              )}
            >
              <Icon name={playing ? "quick-lofi-indicator-playing" : "quick-lofi-indicator"} />
            </button>
            <span
              aria-hidden="true"
              className="flex h-[24px] items-center gap-[7px] rounded-full px-[9px]"
            >
              <Icon name="network-wireless-signal-excellent" size={14} />
              <Icon name="audio-volume-high" size={14} />
              <Icon name="battery-level-80" size={14} />
            </span>
          </span>
        </div>

        {/* Desktop */}
        <div className="relative h-[470px]">
          <div
            id={menuId}
            role="region"
            aria-label="Quick Lofi menu"
            hidden={!open}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                set({ open: false });
                indicatorRef.current?.focus();
              }
            }}
            className="animate-popover-in absolute top-[5px] right-[12px] left-[12px] origin-top-right rounded-[18px] bg-shell-menu p-[9px] text-[var(--shell-menu-fg)] shadow-[var(--popover-shadow)] sm:left-auto sm:w-[300px] sm:right-[58px]"
          >
            <ul className="flex flex-col gap-[2px]">
              {stations.map((s, i) => {
                const active = i === current;
                const icon = !active
                  ? "media-playback-start"
                  : paused
                    ? "media-playback-pause"
                    : "media-playback-stop";
                const action = !active ? "Play" : paused ? "Resume" : "Pause";
                return (
                  <li key={s.name}>
                    <button
                      type="button"
                      onClick={() => activate(i)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        stop(i);
                      }}
                      aria-label={`${action} ${s.name}`}
                      className={cn(
                        "flex h-[40px] w-full items-center gap-[10px] rounded-[12px] px-[12px] text-left text-[1rem] transition-colors hover:bg-hover active:bg-active",
                        active && "font-bold",
                      )}
                    >
                      <Icon name={icon} size={17} />
                      <span className="truncate">{s.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <hr className="mx-[12px] my-[9px] border-border" />

            {station ? (
              <div className="flex flex-col items-center gap-[6px] px-[12px] pt-[3px]">
                <p aria-live="polite" className="flex w-full flex-col items-center text-center">
                  <span className="sr-only">{paused ? "Paused: " : "Now playing: "}</span>
                  <span className="w-full truncate text-[1rem] font-bold">{station.name}</span>
                  {station.playlist ? (
                    <span className="w-full truncate text-[0.8125rem] font-bold">
                      {station.playlist.item}
                    </span>
                  ) : null}
                </p>
                <div className="flex items-center justify-center gap-[6px]">
                  <MiniButton icon="media-skip-backward" label="Previous" onClick={() => skip(-1)} />
                  <MiniButton
                    icon={paused ? "media-playback-pause" : "media-playback-stop"}
                    label={paused ? "Resume" : "Pause"}
                    onClick={() => set({ paused: !paused })}
                  />
                  <MiniButton icon="media-skip-forward" label="Next" onClick={() => skip(1)} />
                </div>
                {duration > 0 ? (
                  <label className="flex w-full items-center gap-[9px] py-[6px] text-[0.8125rem]">
                    <span className="numeric">{formatTime(elapsed)}</span>
                    <span className="sr-only">Playback position</span>
                    <input
                      type="range"
                      min={0}
                      max={duration}
                      value={elapsed}
                      onChange={(e) => set({ elapsed: Number(e.target.value) })}
                      aria-valuetext={`${formatTime(elapsed)} of ${formatTime(duration)}`}
                      className="shell-slider min-w-0 flex-1"
                      style={{ "--value": `${(elapsed / duration) * 100}%` } as React.CSSProperties}
                    />
                    <span className="numeric">{formatTime(duration)}</span>
                  </label>
                ) : null}
              </div>
            ) : null}

            <label className="flex flex-col gap-[6px] px-[12px] pt-[9px] pb-[6px]">
              <span className="numeric text-[1rem]">Volume: {volume}</span>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => set({ volume: Number(e.target.value) })}
                className="shell-slider w-full"
                style={{ "--value": `${volume}%` } as React.CSSProperties}
              />
            </label>
          </div>
        </div>
      </div>
      <figcaption className="caption text-dim">
        Interactive preview of the Quick Lofi menu. Sound only plays in the real extension.
      </figcaption>
    </figure>
  );
}

function MiniButton({
  icon,
  label,
  onClick,
}: {
  icon: "media-skip-backward" | "media-skip-forward" | "media-playback-stop" | "media-playback-pause";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-[38px] items-center justify-center rounded-full transition-colors hover:bg-hover active:bg-active"
    >
      <Icon name={icon} size={20} />
    </button>
  );
}
