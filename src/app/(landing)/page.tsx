import CTA from "./components/cta";
import FeatureSection from "./components/feature-section";
import Intro from "./components/intro";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <FeatureSection />
      <Testimonials />
      <CTA />
    </main>
  );
}
