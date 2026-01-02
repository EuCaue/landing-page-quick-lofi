import ButtonWithDesc from "@/components/button-with-desc";
import Hero from "@/components/hero";

export default function CTA() {
  return (
    <Hero className="gap-10">
      <h1 className="font-bold text-5xl p-3 lg:p-0">
        Listen without distractions on GNOME.
      </h1>
      <h2 className="font-semibold text-2xl p-3 lg:p-0">
        Start playing lofi and ambient sounds in seconds. No setup. No
        distractions.
      </h2>
      <ButtonWithDesc
        text="Get on GNOME Extensions"
        desc="Free and open source  Available for GNOME"
        href="https://extensions.gnome.org/extension/6904/quick-lofi/"
        title="Install Extension"
        target="_blank"
        className="text-xl font-bold text-center"
      />
    </Hero>
  );
}
