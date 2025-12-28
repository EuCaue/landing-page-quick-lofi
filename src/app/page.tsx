import Hero from "@/components/hero";
import Link, { LinkProps } from "next/link";

type ButtonWithDescType = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    text: string;
    desc: string;
  };

function ButtonWithDesc({ text, desc, ...rest }: ButtonWithDescType) {
  return (
    <span className="relative">
      <Link
        className="p-3 rounded-2xl font-semibold text-lg text-center flex items-center justify-center self-center bg-accent w-3xs h-16 z-50"
        {...rest}
      >
        {text}
      </Link>
      <div
        className="rounded-bl-2xl rounded-br-2xl font-semibold text-sm bg-card w-3xs h-12 flex items-end justify-center p-3 absolute top-[86%] z-auto"
        title={desc}
      >
        {desc}
      </div>
    </span>
  );
}

function Intro() {
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

export default function Home() {
  return (
    <main className="">
      <Intro />
    </main>
  );
}
