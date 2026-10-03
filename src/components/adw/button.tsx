import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
 * Buttons follow Libadwaita: raised (default), flat, suggested-action,
 * and the .pill shape for prominent calls to action.
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-[9px] whitespace-nowrap select-none",
    "font-bold leading-none transition-[background-color,color,box-shadow] duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        raised: "bg-hover text-fg hover:bg-active active:bg-active",
        flat: "bg-transparent text-fg hover:bg-hover active:bg-active",
        suggested:
          "bg-accent-bg text-accent-fg hover:bg-[color-mix(in_oklab,var(--accent-bg-strong)_90%,white)] active:bg-[color-mix(in_oklab,var(--accent-bg-strong)_85%,black)]",
      },
      size: {
        default: "h-[34px] px-[13px] text-[0.9375rem] rounded-button",
        pill: "h-12 px-[26px] text-base rounded-full",
        icon: "size-[34px] rounded-button",
        "icon-circular": "size-[34px] rounded-full",
      },
    },
    defaultVariants: { variant: "raised", size: "default" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = React.ComponentProps<"button"> & ButtonVariants;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export type LinkButtonProps = React.ComponentProps<"a"> &
  ButtonVariants & {
    /** Opens in a new tab and adds rel="noopener". */
    external?: boolean;
  };

export function LinkButton({
  className,
  variant,
  size,
  external,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), "no-underline", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      {...props}
    />
  );
}
