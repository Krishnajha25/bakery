import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-sans",
  style: ["normal", "italic"],
});

const title = "Bakeology — Home Bakery in Vasai-Virar, Mumbai";
const description =
  "Fresh-baked cookies, cookie cakes & tiramisu from an FSSAI-registered home bakery in Vasai-Virar, Mumbai. Serving Vasai, Virar, Nalasopara & nearby. Pre-order 1–2 days ahead on Instagram or WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "home bakery Vasai-Virar",
    "bakery in Vasai",
    "bakery in Virar",
    "fresh cookies Vasai",
    "cookies Virar",
    "cookie cake Vasai-Virar",
    "tiramisu Vasai",
    "birthday cookie cake Virar",
    "chocolate kunafa cookie Mumbai",
    "biscoff cookie Vasai",
    "homemade cookies Nalasopara",
    "FSSAI registered home bakery Mumbai",
    "bakery near me Vasai-Virar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Box of assorted fresh-baked Bakeology cookies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Vasai-Virar, Mumbai",
    ICBM: "19.39, 72.84",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${karla.variable}`}>{children}</body>
    </html>
  );
}
