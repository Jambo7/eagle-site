import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// GitHub Pages serves this repo under https://jambo7.github.io/eagle-site/
// (`NEXT_PUBLIC_BASE_PATH=/eagle-site`). Plain `/main.js` would 404 there —
// the hero scroll-reveal CSS keeps `.reveal { opacity: 0 }` until main.js
// runs, so a wrong script URL looks like an empty white screen.
const mainJsSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/main.js`;

export const metadata: Metadata = {
  title: "Eagle AI Labs | Predictive Intelligence for Crypto Markets",
  description: "Eagle AI Labs deploys institutional-grade AI to forecast cryptocurrency price movements with unprecedented precision. 2+ years pioneering crypto market intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `.reveal{opacity:1!important;transform:none!important}`,
            }}
          />
        </noscript>
        {children}
        <Script src={mainJsSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
