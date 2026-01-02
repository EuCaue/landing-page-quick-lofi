import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

export type ButtonWithDescType = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    text: string;
    className?: string;
    desc: string;
    classNameDesc?: string;
  };

export default function ButtonWithDesc({
  text,
  desc,
  className,
  ...rest
}: ButtonWithDescType) {
  return (
    <span className="relative flex items-center justify-center self-center">
      <Link
        {...rest}
        className={cn(
          "p-3 mb-1 rounded-2xl font-semibold text-lg text-center flex items-center justify-center self-center bg-accent text-accent-foreground dark:text-card-foreground w-3xs z-10 h-max",
          className,
        )}
      >
        {text}
      </Link>
      <div
        className="rounded-bl-2xl rounded-br-2xl font-semibold text-sm bg-card w-3xs h-12 flex items-center justify-center p-3 absolute top-[86%]  self-center z-50 text-center"
        title={desc}
      >
        {desc}
      </div>
    </span>
  );
}
