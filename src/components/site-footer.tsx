import { LINKS, RELEASE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-sidebar">
      <div className="page-container flex flex-col gap-[6px] border-t border-border py-4 caption text-dim md:flex-row md:justify-between">
        <p>
          Quick Lofi by{" "}
          <a href={LINKS.author} target="_blank" rel="noopener noreferrer" className="text-fg underline decoration-border hover:decoration-current">
            {RELEASE.author}
          </a>
          . Not affiliated with the GNOME Foundation.
        </p>
        <p>Icons from the Adwaita icon theme.</p>
      </div>
    </footer>
  );
}
