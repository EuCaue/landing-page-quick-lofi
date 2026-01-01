import ButtonWithDesc from "@/components/button-with-desc";
import Hero from "@/components/hero";

//  TODO: mobile friendly
export default function Intro() {
  return (
    <Hero className="gap-8">
      <h1 className="font-bold text-5xl">Sound. Focus. No distractions.</h1>
      <h2 className="font-semibold text-2xl">
        Seamlessly integrated with your GNOME desktop. Just click and listen.
      </h2>
      <ButtonWithDesc
        text="Install Extension"
        desc="Compatible with GNOME 45-49"
        href="https://extensions.gnome.org/extension/6904/quick-lofi/"
        title="Install Extension"
        target="_blank"
      />
    </Hero>
  );
}
