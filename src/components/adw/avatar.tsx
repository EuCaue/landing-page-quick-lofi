import { cn } from "@/lib/utils";

/* Gradient and initials colors of AdwAvatar's generated palette. */
const PALETTE = [
  ["#83b6ec", "#337fdc", "#cfe1f5"],
  ["#7ad9f1", "#0f9ac8", "#caeaf2"],
  ["#8de6b1", "#29ae74", "#cef8d8"],
  ["#b5e98a", "#6ab85b", "#e6f9d7"],
  ["#f8d936", "#d29d09", "#f9f4e1"],
  ["#ffcb62", "#d68400", "#ffead1"],
  ["#ffa95a", "#ed5b00", "#ffe5c5"],
  ["#f78ca0", "#e62d42", "#f8d2ce"],
  ["#e973ab", "#e33b6a", "#fac7de"],
  ["#cb78d4", "#9945b5", "#e7c2e8"],
  ["#9e91e8", "#7a59ca", "#d5d2f5"],
  ["#e3cf9c", "#b08952", "#f2eade"],
  ["#be916d", "#785336", "#e5d6ca"],
  ["#c0bfbc", "#6e6d71", "#d8d7d3"],
] as const;

function hash(text: string) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/*
 * AdwAvatar with generated initials. Decorative: the name is always shown
 * next to it, so it is hidden from assistive tech.
 */
export function Avatar({
  name,
  size = 32,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const [from, to, fg] = PALETTE[hash(name) % PALETTE.length];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-bold uppercase select-none",
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        color: fg,
        backgroundImage: `linear-gradient(${from}, ${to})`,
      }}
    >
      {name.slice(0, 1)}
    </span>
  );
}
