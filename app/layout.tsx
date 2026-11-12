import type { Metadata } from "next";
import { Archivo, Sometype_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = Sometype_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eagleailabs.com"),
  title: "Eagle AI Labs has closed | How to unstake your EAI",
  description:
    "Eagle AI Labs has closed and staking has ended. You can unstake your EAI yourself at any time on Base. Steps and a stake checker are on this page.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
