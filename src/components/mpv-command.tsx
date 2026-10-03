"use client";

import { useState } from "react";
import { DISTROS, type Distro } from "@/content/site";
import { TabPanel, ToggleGroup } from "@/components/adw/toggle-group";
import { CommandBlock } from "@/components/adw/command-block";

const ID = "mpv";

export function MpvCommand({ distros = DISTROS }: { distros?: Distro[] }) {
  const [distro, setDistro] = useState(distros[0].id);
  return (
    <div className="flex flex-col gap-2">
      <ToggleGroup
        items={distros}
        value={distro}
        onValueChange={setDistro}
        label="Distribution"
        idPrefix={ID}
        className="self-start"
      />
      {distros.map((d) => (
        <TabPanel key={d.id} idPrefix={ID} id={d.id} hidden={d.id !== distro}>
          <CommandBlock command={d.command} />
        </TabPanel>
      ))}
    </div>
  );
}
