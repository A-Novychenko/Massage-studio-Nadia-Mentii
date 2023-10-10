import Image from "next/image";
import styles from "./page.module.css";

import {BannerSection} from "@/components/sections/Banner/BannerSection";
import {SessionsSection} from "@/components/sections/Sessions/Sessions";
import {ReviewsSection} from "@/components/sections/Reviews/Reviews";
import {AboutMassageSection} from "@/components/sections/AboutMassage/AboutMassage";
import {PriceSection} from "@/components/sections/Price/Price";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <SessionsSection />
      <ReviewsSection />
      <AboutMassageSection />
      <PriceSection />
    </main>
  );
}
