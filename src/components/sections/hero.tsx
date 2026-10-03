import Image from "next/image";
import { LINKS, RELEASE, SHELL_RANGE } from "@/content/site";
import { LinkButton } from "@/components/adw/button";
import { Icon } from "@/components/icons/icon";
import { GitHubLogo } from "@/components/icons/github-logo";
import { ShellPreview } from "@/components/shell-preview";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="page-container pt-8 pb-8 md:pt-12 md:pb-12">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex max-w-[34rem] flex-col items-start gap-4">
          <Image
            src="/logo.svg"
            alt=""
            width={64}
            height={64}
            unoptimized
            priority
            className="drop-shadow-[0_2px_6px_rgb(0_0_6/12%)]"
          />
          <h1 id="hero-title" className="title-display text-fg">
            Lofi in your GNOME top bar.
          </h1>
          <p className="body-lg max-w-[30rem] text-dim">
            Quick Lofi is a GNOME Shell extension that plays radio streams and
            local audio from the panel. No browser tab to keep open.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <LinkButton href={LINKS.ego} external variant="suggested" size="pill">
              Get it on GNOME Extensions
              <Icon name="external-link" size={14} />
            </LinkButton>
            <LinkButton href={LINKS.repo} external variant="flat" size="pill" className="px-[18px]">
              <GitHubLogo />
              Source code
            </LinkButton>
          </div>
        </div>

        <ShellPreview />
      </div>

      <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-card bg-card shadow-[var(--card-shadow)] md:mt-12 md:grid-cols-4">
        <Fact term="Works with" detail={`GNOME ${SHELL_RANGE}`} />
        <Fact term="Needs" detail="mpv" />
        <Fact term="License" detail={RELEASE.license} />
        <Fact term="Downloads" detail={RELEASE.downloads} />
      </dl>
    </section>
  );
}

function Fact({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex flex-col gap-[3px] px-[18px] py-2 shadow-[-1px_0_0_var(--border-color),0_-1px_0_var(--border-color)]">
      <dt className="caption text-dim">{term}</dt>
      <dd className="numeric text-[1.0625rem] font-bold text-fg">{detail}</dd>
    </div>
  );
}
