import Image from "next/image";
import { LINKS, RELEASE } from "@/content/site";
import { ActionRow, BoxedList } from "@/components/adw/boxed-list";
import { LinkButton } from "@/components/adw/button";
import { Pill } from "@/components/adw/widgets";
import { Icon } from "@/components/icons/icon";

/* Closing section, laid out like AdwAboutDialog. */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-sidebar px-[16px] py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-[26rem] flex-col items-center gap-4 rounded-window bg-window px-[18px] pt-8 pb-4 text-center shadow-[var(--popover-shadow)] sm:px-4">
        <Image src="/logo.svg" alt="" width={96} height={96} unoptimized loading="lazy" />
        <div className="flex flex-col items-center gap-[6px]">
          <h2 id="about-title" className="title-1 text-fg">
            Quick Lofi
          </h2>
          <p className="text-dim">
            <a href={LINKS.author} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline hover:underline">
              {RELEASE.author}
            </a>
          </p>
          <Pill>{RELEASE.version}</Pill>
        </div>
        <LinkButton href={LINKS.ego} external variant="suggested" size="pill">
          Get it on GNOME Extensions
          <Icon name="external-link" size={14} />
        </LinkButton>

        <BoxedList className="w-full text-left">
          <ActionRow href={LINKS.repo} external title="Source code" />
          <ActionRow href={LINKS.issues} external title="Report an issue" />
          <ActionRow href={LINKS.troubleshooting} external title="Troubleshooting" />
          <ActionRow href={LINKS.development} external title="Contribute" subtitle="Pull requests go to the develop branch" />
        </BoxedList>
        <BoxedList className="w-full text-left">
          <ActionRow href={LINKS.kofi} external title="Support on Ko-fi" />
        </BoxedList>

        <p className="caption max-w-[22rem] text-dim text-pretty">
          This program comes with absolutely no warranty. See the{" "}
          <a href={LINKS.license} target="_blank" rel="noopener noreferrer" className="text-accent underline">
            GNU General Public License, version 3 or later
          </a>{" "}
          for details.
        </p>
      </div>
    </section>
  );
}
