import {BannerSection} from "@/components/sections/Banner/BannerSection";
import {SessionsSection} from "@/components/sections/Sessions/Sessions";
import {ReviewsSection} from "@/components/sections/Reviews/Reviews";
import {AboutMassageSection} from "@/components/sections/AboutMassage/AboutMassage";
import {PriceSection} from "@/components/sections/Price/Price";
import {PriceModalProvider} from "@/components/Providers/PriceModalProvider";
import {ContactSection} from "@/components/sections/Contact/Contact.module";

export default function Home() {
  return (
    <main>
      <BannerSection />

      <SessionsSection />

      <ReviewsSection />

      <AboutMassageSection />

      <PriceModalProvider>
        <PriceSection />
      </PriceModalProvider>

      <ContactSection />
    </main>
  );
}
