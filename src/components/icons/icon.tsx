import { cn } from "@/lib/utils";
import { ICON_PATHS, type IconName, type IconPath } from "./paths";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Rendered size in px. Symbolic icons are drawn on a 16px grid. */
  size?: number;
  /** Accessible label. Without it the icon is hidden from assistive tech. */
  label?: string;
};

/** GNOME symbolic icon. Inherits `currentColor`. */
export function Icon({ name, size = 16, label, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      {...rest}
    >
      {(ICON_PATHS[name] as IconPath[]).map((p, i) =>
        p.stroke ? (
          <path
            key={i}
            d={p.d}
            fill="none"
            stroke="currentColor"
            strokeWidth={p.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            key={i}
            d={p.d}
            fill="currentColor"
            opacity={p.opacity}
          />
        ),
      )}
    </svg>
  );
}

export type { IconName };
