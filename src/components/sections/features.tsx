import { FEATURE_GROUPS, type FeatureSuffix } from "@/content/site";
import { ActionRow, BoxedList, PreferencesGroup } from "@/components/adw/boxed-list";
import {
  DropdownIllustration,
  Keycaps,
  PlayButtonIllustration,
  SliderIllustration,
  SwitchIllustration,
} from "@/components/adw/widgets";

function Suffix({ suffix }: { suffix: FeatureSuffix }) {
  switch (suffix.kind) {
    case "play":
      return <PlayButtonIllustration />;
    case "keys":
      return (
        <span className="flex items-center gap-[6px] max-sm:hidden">
          <span className="sr-only">Example shortcut:</span>
          <Keycaps keys={suffix.keys} />
        </span>
      );
    case "dropdown":
      return (
        <span className="max-sm:hidden">
          <DropdownIllustration label={suffix.label} />
        </span>
      );
    case "switch":
      return <SwitchIllustration />;
    case "slider":
      return (
        <span className="max-sm:hidden">
          <SliderIllustration value={suffix.value} />
        </span>
      );
  }
}

/* Laid out like a Libadwaita preferences page: grouped boxed lists. */
export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="page-container py-12 md:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-12">
        <div className="flex flex-col gap-2 lg:sticky lg:top-[95px] lg:self-start">
          <h2 id="features-title" className="title-1 text-fg">
            Small extension, real settings
          </h2>
          <p className="max-w-[36ch] text-dim text-pretty">
            The menu stays simple. Preferences open in a regular GNOME window
            with three pages: Radios, Player, and Interface.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {FEATURE_GROUPS.map((group) => (
            <PreferencesGroup
              key={group.id}
              id={`features-${group.id}`}
              title={group.title}
              description={group.description}
            >
              <BoxedList>
                {group.features.map((f) => (
                  <ActionRow
                    key={f.title}
                    icon={f.icon}
                    title={f.title}
                    subtitle={f.description}
                    suffix={f.suffix ? <Suffix suffix={f.suffix} /> : undefined}
                  />
                ))}
              </BoxedList>
            </PreferencesGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
