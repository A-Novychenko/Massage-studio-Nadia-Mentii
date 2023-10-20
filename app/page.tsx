import {BannerSection} from "@/components/sections/Banner/BannerSection";
import {SessionsSection} from "@/components/sections/Sessions/Sessions";
import {ReviewsSection} from "@/components/sections/Reviews/Reviews";
import {AboutMassageSection} from "@/components/sections/AboutMassage/AboutMassage";
import {PriceSection} from "@/components/sections/Price/Price";
import {PriceModalProvider} from "@/components/Providers/PriceModalProvider";

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
    </main>
  );
}
