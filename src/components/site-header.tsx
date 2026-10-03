import Image from "next/image";
import { LINKS, NAV } from "@/content/site";
import { buttonVariants } from "@/components/adw/button";
import { GitHubLogo } from "@/components/icons/github-logo";
import { StyleMenu } from "@/components/style-menu";

/* AdwHeaderBar: 47px tall, flat buttons, a 1px shade under it. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-headerbar shadow-[0_1px_0_var(--shade-color)]">
      <div className="page-container flex h-[47px] items-center gap-2">
        <a
          href="#top"
          className="-ml-[6px] flex items-center gap-[9px] rounded-button px-[6px] py-[3px] text-fg no-underline"
        >
          <Image src="/logo.svg" alt="" width={24} height={24} unoptimized priority />
          <span className="text-[0.9375rem] font-bold">Quick Lofi</span>
        </a>

        <nav aria-label="Sections" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-[3px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={buttonVariants({ variant: "flat" })}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="ml-auto flex items-center gap-[3px] md:ml-[6px]">
          <a
            href={LINKS.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code on GitHub (opens in a new tab)"
            className={buttonVariants({ variant: "flat", size: "icon" })}
          >
            <GitHubLogo />
          </a>
          <StyleMenu />
        </span>
      </div>
    </header>
  );
}
