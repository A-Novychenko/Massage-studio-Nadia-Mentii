import {HeaderSection} from "@/components/sections/Header/Header";
import "./globals.css";
import type {Metadata} from "next";
import {Roboto} from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Студія масажу Надії Ментій",
  description:
    "Студія масажу: релаксація та турбота про ваше здоров'я. Найкращі масажисти та затишна атмосфера. Запишіться сьогодні і відчуйте різницю.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk">
      <body className={roboto.className}>
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
