import { LINKS, RELEASE } from "@/content/site";
import { LinkButton } from "@/components/adw/button";
import { CommandBlock } from "@/components/adw/command-block";
import { Pill } from "@/components/adw/widgets";
import { Icon } from "@/components/icons/icon";
import { MpvCommand } from "@/components/mpv-command";

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-2 gap-y-[9px] sm:grid-cols-[42px_minmax(0,1fr)]">
      <span
        aria-hidden="true"
        className="numeric flex size-[36px] items-center justify-center rounded-full bg-accent-soft font-display text-[1.0625rem] font-bold text-accent sm:size-[42px]"
      >
        {n}
      </span>
      <h3 className="title-2 self-center text-fg">{title}</h3>
      <div className="col-span-2 flex min-w-0 flex-col gap-2 text-dim sm:col-span-1 sm:col-start-2">{children}</div>
    </li>
  );
}

export function Install() {
  return (
    <section id="install" aria-labelledby="install-title" className="page-container py-12 md:py-16">
      <div className="mx-auto flex max-w-[44rem] flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 id="install-title" className="title-1 text-fg">
            Install
          </h2>
          <p className="text-dim text-pretty">
            Quick Lofi supports these GNOME Shell versions. Run{" "}
            <code className="rounded-[4px] bg-hover px-[4px] py-[1px] text-[0.875em] text-fg">
              gnome-shell --version
            </code>{" "}
            to check yours.
          </p>
          <ul aria-label="Supported GNOME Shell versions" className="flex flex-wrap gap-1">
            {RELEASE.shellVersions.map((v) => (
              <li key={v}>
                <Pill>GNOME {v}</Pill>
              </li>
            ))}
          </ul>
        </div>

        <ol className="flex flex-col gap-8">
          <Step n={1} title="Install mpv">
            <p>Quick Lofi plays everything through mpv, so install it first.</p>
            <MpvCommand />
          </Step>

          <Step n={2} title="Add the extension">
            <p>
              Install it from extensions.gnome.org with the{" "}
              <a href={LINKS.browserIntegration} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                browser integration
              </a>
              , or search for Quick Lofi in{" "}
              <a href={LINKS.extensionManager} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                Extension Manager
              </a>
              .
            </p>
            <LinkButton href={LINKS.ego} external variant="suggested" size="pill" className="self-start">
              Get it on GNOME Extensions
              <Icon name="external-link" size={14} />
            </LinkButton>
          </Step>

          <Step n={3} title="Pick a station">
            <p>
              Click the Quick Lofi icon in the top bar and choose a station.
              Three lofi streams come preset. Add your own in Preferences under
              Radios.
            </p>
          </Step>
        </ol>

        <details className="group boxed-list overflow-hidden">
          <summary className="flex min-h-[54px] cursor-pointer list-none items-center gap-2 px-[15px] text-[0.9375rem] text-fg hover:bg-hover [&::-webkit-details-marker]:hidden">
            <span className="flex-1">Other ways to install</span>
            <Icon
              name="expander-arrow"
              className="rotate-180 text-dim transition-transform duration-200 group-open:rotate-0"
            />
          </summary>
          <div className="flex flex-col gap-2 border-t border-border px-[15px] pt-2 pb-[18px] text-dim">
            <p>
              Download <code className="text-fg">quick-lofi@eucaue.zip</code> from the{" "}
              <a href={LINKS.releases} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                releases page
              </a>
              , then run this in the same folder and log out and back in:
            </p>
            <CommandBlock command="gnome-extensions install --force quick-lofi@eucaue.zip" />
            <p>
              To build from source with Node and npm, follow the{" "}
              <a href={LINKS.manualInstall} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                manual installation steps
              </a>{" "}
              in the README.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
