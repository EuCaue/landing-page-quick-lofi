import Link, { type LinkProps } from "next/link";
import { GithubIcon, GlobeIcon, HeartHandshakeIcon } from "lucide-react";
type HeaderActionType = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  };

function HeaderAction({ href, children, ...rest }: HeaderActionType) {
  return (
    <Link
      href={href}
      target="_blank"
      {...rest}
      className="
      flex items-center gap-2 px-3 py-2 rounded-md
      bg-transparent
      font-bold
      focus-visible:outline-none
      active:bg-(--view-bg)
      decoration-2
      underline-offset-4
      decoration-accent
      transition-[text-decoration-line]
      duration-1000
      ease-in-out
      hover:underline
      "
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-10
        w-full
        flex items-center gap-6
        p-4
        bg-(--header-bg)
        text-(--header-fg)
        border-b border-(--border-color)
      "
    >
      <h1
        className="font-bold text-2xl flex-1"
        title="Open GNOME Extension Website"
      >
        <Link
          href="https://extensions.gnome.org/extension/6904/quick-lofi/"
          target="_blank"
        >
          QUICK LOFI
        </Link>
      </h1>

      <HeaderAction
        href="https://extensions.gnome.org/extension/6904/quick-lofi/"
        title="Open GNOME Extension Website"
      >
        <GlobeIcon />
        Extension Website
      </HeaderAction>

      <HeaderAction
        href="https://github.com/eucaue/gnome-shell-extension-quick-lofi"
        title="Open Extension Github Repository."
      >
        <GithubIcon />
        GitHub
      </HeaderAction>

      <HeaderAction
        href="https://ko-fi.com/eucaue"
        title="Open Extension Ko-Fi Page."
      >
        <HeartHandshakeIcon />
        Sponsor
      </HeaderAction>
    </header>
  );
}
