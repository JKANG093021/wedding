import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/bodoni-moda/latin-400.css";
import "@fontsource/bodoni-moda/latin-400-italic.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "./globals.css";
import { wedding } from "@/data/wedding";
const title = `${wedding.groom} & ${wedding.bride}`;
const description = `You're invited to celebrate our wedding at ${wedding.venue}.`;
export const metadata: Metadata = {
  title, description,
  ...(wedding.siteUrl ? { metadataBase: new URL(wedding.siteUrl) } : {}),
  openGraph: { title, description, type: "website", locale: "en_PH",
    ...(wedding.socialImage ? { images: [{ url: wedding.socialImage, alt: title }] } : {}) },
  twitter: { card: wedding.socialImage ? "summary_large_image" : "summary", title, description },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preload" href="/images/couple.webp" as="image" type="image/webp" /></head><body>{children}</body></html>;
}
