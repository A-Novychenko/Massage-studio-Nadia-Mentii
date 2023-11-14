import { BannerSection } from "@/components/sections/MainPage/Banner/BannerSection";
import { SessionsSection } from "@/components/sections/MainPage/Sessions/Sessions";
import { ReviewsSection } from "@/components/sections/MainPage/Reviews/Reviews";
import { AboutMassageSection } from "@/components/sections/MainPage/AboutMassage/AboutMassage";
import { PriceSection } from "@/components/sections/MainPage/Price/Price";
import { PriceModalProvider } from "@/components/Providers/PriceModalProvider";
import { ContactSection } from "@/components/sections/MainPage/Contact/Contact.module";

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
