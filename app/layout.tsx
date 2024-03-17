import {HeaderSection} from "@/components/sections/Header/Header";
import "./globals.css";
import type {Metadata} from "next";
import Script from "next/script";
import {Roboto} from "next/font/google";
import {FooterSection} from "@/components/sections/Footer/Footer";
import Image from "next/image";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

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

      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
         n.queue=[];t=b.createElement(e);t.async=!0;
         t.src=v;s=b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t,s)}(window, document,'script',
         'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '${FB_PIXEL_ID}');
         fbq('track', 'PageView');`}
      </Script>

      <body className={roboto.className}>
        <HeaderSection />
        {children}
        <FooterSection />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{display: "none"}}
            alt="fbpixel"
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
