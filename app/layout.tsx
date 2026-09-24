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
const shareTitle = "You are invited — please open this invitation.";
const shareDescription = `${wedding.groom} & ${wedding.bride} invite you to celebrate their wedding on September 28, 2026.`;
const shareImage = "/images/couple.webp";

export const metadata: Metadata = {
  title,
  description,
  ...(wedding.siteUrl
    ? {
        metadataBase: new URL(wedding.siteUrl),
        alternates: { canonical: wedding.siteUrl },
      }
    : {}),
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    locale: "en_PH",
    ...(wedding.siteUrl
      ? {
          url: wedding.siteUrl,
          siteName: `${wedding.groom} & ${wedding.bride} Wedding`,
        }
      : {}),
    images: [{ url: shareImage, alt: shareTitle }],
  },
  facebook: { appId: "842410102268602" },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preload" href="/images/couple.webp" as="image" type="image/webp" /></head><body>{children}</body></html>;
}
