import { cn } from "@/lib/utils";

export default function Hero({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-screen min-w-screen flex items-center justify-center flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}
