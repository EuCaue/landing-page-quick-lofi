"use client";

import { useState } from "react";
import Image from "next/image";
import { SCREENSHOTS, type Screenshot } from "@/content/site";
import { TabPanel, ToggleGroup } from "@/components/adw/toggle-group";

const ID = "screenshots";

/*
 * Both theme variants are rendered; CSS shows the one matching the page
 * style. Lazy images inside display:none are not fetched.
 */
function ThemedShot({ shot }: { shot: Screenshot }) {
  const { dark, light } = shot;
  const isSmall = dark.width < 600;
  const alt = `Quick Lofi ${shot.label.toLowerCase()}. ${shot.caption}`;
  const common = {
    sizes: isSmall ? `${dark.width}px` : "(max-width: 1024px) 92vw, 720px",
    loading: "lazy" as const,
    className: isSmall ? "h-auto w-full rounded-[18px]" : "h-auto w-full",
    style: { maxWidth: isSmall ? dark.width : 720 },
  };
  if (!light) {
    return <Image src={dark.src} alt={alt} width={dark.width} height={dark.height} {...common} />;
  }
  return (
    <>
      <Image
        src={light.src}
        alt={alt}
        width={light.width}
        height={light.height}
        {...common}
        className={`${common.className} dark:hidden`}
      />
      <Image
        src={dark.src}
        alt={alt}
        width={dark.width}
        height={dark.height}
        {...common}
        className={`${common.className} hidden dark:block`}
      />
    </>
  );
}

export function Screenshots({ shots = SCREENSHOTS }: { shots?: Screenshot[] }) {
  const [active, setActive] = useState(shots[0]?.id ?? "");

  return (
    <section id={ID} aria-labelledby="screenshots-title" className="bg-sidebar py-12 md:py-16">
      <div className="page-container flex flex-col items-center gap-4">
        <div className="flex max-w-[40rem] flex-col items-center gap-2 text-center">
          <h2 id="screenshots-title" className="title-1 text-fg">
            Screenshots
          </h2>
          <p className="text-dim text-pretty">
            The panel menu, and two pages of the preferences window. Preference
            captures follow the light or dark style of this page.
          </p>
        </div>

        <ToggleGroup
          items={shots.map(({ id, label }) => ({ id, label }))}
          value={active}
          onValueChange={setActive}
          label="Screenshot"
          idPrefix={ID}
        />

        {shots.map((shot) => (
          <TabPanel
            key={shot.id}
            idPrefix={ID}
            id={shot.id}
            hidden={shot.id !== active}
            className="flex w-full flex-col items-center gap-2"
          >
            <div className="flex w-full max-w-[720px] items-center justify-center">
              <ThemedShot shot={shot} />
            </div>
            <p className="caption text-dim">{shot.caption}</p>
          </TabPanel>
        ))}
      </div>
    </section>
  );
}
