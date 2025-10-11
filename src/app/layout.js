import { Albert_Sans, Lora } from "next/font/google";

import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import AppHeader from "./Components/AppHeader";
import { GridOverlayProvider } from "@/app/Components/GridOverlayProvider";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kunal Bhat - Product Designer",
  description:
    "Kunal is a technically-oriented, fullstack product designer in Chicago with 15 years of experience.",
  openGraph: {
    title: "Kunal Bhat - Product Designer",
    description:
      "Kunal is a technically-oriented, fullstack product designer in Chicago with 15 years of experience.",
    url: "https://kunalbhat.com",
    siteName: "Kunal Bhat",
    images: [
      {
        url: "https://kunalbhat.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kunal Bhat - Product Designer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} ${loraSerif.variable} antialiased`}
    >
      <body>
        <GridOverlayProvider>
          <AppHeader />
          {children}
          <SpeedInsights />
          <Analytics />
        </GridOverlayProvider>
      </body>
    </html>
  );
}
