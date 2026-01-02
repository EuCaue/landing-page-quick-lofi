import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex lg:items-end items-center justify-center self-center gap-10 font-bold text-lg h-max p-3 bg-card flex-wrap">
      <span>
        Made with &#10084;&#65039; by{" "}
        <Link
          target="_blank"
          href="https://www.github.com/EuCaue"
          className="decoration-2 underline-offset-4 decoration-accent transition-[text-decoration-line] duration-1000 ease-in hover:underline"
        >
          EuCaue
        </Link>
      </span>
      <span className="">&copy; 2024 — 2025</span>
      <span>
        <Link
          target="_blank"
          href="https://ko-fi.com/eucaue"
          className="decoration-2 underline-offset-4 decoration-accent transition-[text-decoration-line] duration-1000 ease-in hover:underline"
        >
          Sponsor Me
        </Link>
      </span>
    </footer>
  );
}
