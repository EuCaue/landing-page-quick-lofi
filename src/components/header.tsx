import Link, { type LinkProps } from "next/link";
import {
  GithubIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  MenuIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

function MobileHeader() {
  return (
    <span className="flex lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-card text-card-foreground">
          <DropdownMenuItem className="dark:focus:text-card-foreground">
            <HeaderAction
              href="https://extensions.gnome.org/extension/6904/quick-lofi/"
              title="Open GNOME Extension Website"
            >
              <GlobeIcon />
              Extension Website
            </HeaderAction>
          </DropdownMenuItem>

          <DropdownMenuItem className="dark:focus:text-card-foreground">
            <HeaderAction
              href="https://github.com/eucaue/gnome-shell-extension-quick-lofi"
              title="Open Extension Github Repository."
            >
              <GithubIcon />
              GitHub
           </HeaderAction>
          </DropdownMenuItem>

          <DropdownMenuItem className="dark:focus:text-card-foreground!">
            <HeaderAction
              href="https://ko-fi.com/eucaue"
              title="Open Extension Ko-Fi Page."
            >
              <HeartHandshakeIcon />
              Sponsor
            </HeaderAction>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
}

function DesktopHeader() {
  return (
    <span className="hidden lg:flex">
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
    </span>
  );
}

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-10
        w-full
        flex items-center gap-4
        p-4
        bg-card text-card-foreground
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
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
