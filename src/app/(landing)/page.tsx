import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Screenshots } from "@/components/sections/screenshots";
import { Install } from "@/components/sections/install";
import { Reviews } from "@/components/sections/reviews";
import { About } from "@/components/sections/about";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Features />
      <Screenshots />
      <Install />
      <Reviews />
      <About />
    </>
  );
}
