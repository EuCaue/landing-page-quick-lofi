import { cn } from "@/lib/utils";

export type HeroProps = React.ComponentProps<"div">;

export default function Hero({ children, className, ...rest }: HeroProps) {
  return (
    <div
      {...rest}
      className={cn(
        "min-h-screen min-w-screen flex items-center justify-center flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}
