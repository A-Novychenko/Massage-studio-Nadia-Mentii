import {PriceModalProvider} from "@/components/Providers/PriceModalProvider";
import {IntroSection} from "@/components/sections/SpecialistsPage/Intro/Intro";
import {OurSpecialistsList} from "@/components/sections/SpecialistsPage/Specialists/Specialists";

export default function AboutPage() {
  return (
    <>
      <IntroSection />

      <PriceModalProvider>
        <OurSpecialistsList />
      </PriceModalProvider>
    </>
  );
}
