import Link, { LinkProps } from "next/link";

export type ButtonWithDescType = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    text: string;
    desc: string;
  };

export default function ButtonWithDesc({
  text,
  desc,
  ...rest
}: ButtonWithDescType) {
  return (
    <span className="relative">
      <Link
        className="p-3 rounded-2xl font-semibold text-lg text-center flex items-center justify-center self-center bg-accent text-accent-foreground dark:text-card-foreground w-3xs h-16 z-50"
        {...rest}
      >
        {text}
      </Link>
      <div
        className="rounded-bl-2xl rounded-br-2xl font-semibold text-sm bg-card w-3xs h-12 flex items-end justify-center p-3 absolute top-[86%] z-auto"
        title={desc}
      >
        {desc}
      </div>
    </span>
  );
}
