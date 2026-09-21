import { ClosingSection } from "@/components/closing/ClosingSection";
import { Hero } from "@/components/hero/Hero";
import { InitialLoader } from "@/components/loading/InitialLoader";
import { ToursSection } from "@/components/tours/ToursSection";

export default function Home() {
  return (
    <>
      <InitialLoader />
      <main aria-label="Almutahida virtual tours">
        <Hero />
        <ToursSection />
        <ClosingSection />
      </main>
    </>
  );
}
