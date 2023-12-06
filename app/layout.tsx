import {HeaderSection} from "@/components/sections/Header/Header";
import "./globals.css";
import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import {FooterSection} from "@/components/sections/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  // title: "Студія масажу Надії Ментій",
  title: "NM_massage_kiev",
  description:
    "Студія масажу: релаксація та турбота про ваше здоров'я. Найкращі масажисти та затишна атмосфера. Запишіться сьогодні і відчуйте різницю.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk">
      <meta
        name="google-site-verification"
        content="t6eVypW-eeO633tkfsKxcpI-oB0AnUwDjH8XOsTfG_0"
      />
      <meta
        name="google-site-verification"
        content="yndh6V-APMnLmCO4R9d_HBHwQn7jh8SureLkE6oq0B0"
      />
      <body className={roboto.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
