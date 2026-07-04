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

export const metadata: Metadata = {
  title: `${site.name} — small-batch cookies, cookie cakes & tiramisu`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
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
