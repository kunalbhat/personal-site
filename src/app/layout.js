import { Albert_Sans, Lora, Instrument_Serif } from "next/font/google";

import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import { ThemeProvider } from "@/app/Components/ThemeProvider";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
});

// app/layout.js
export const metadata = {
  title: "Kunal Bhat - Product Designer",
  description:
    "Kunal is a technically-oriented, fullstack product designer in Chicago with 18 years of experience.",
  metadataBase: new URL("https://kunalbhat.com"),

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#111111" },
    ],
  },

  manifest: "/site.webmanifest",
  themeColor: "#ffffff",

  openGraph: {
    title: "Kunal Bhat - Product Designer",
    description:
      "Kunal is a technically-oriented, fullstack product designer in Chicago with 18 years of experience.",
    url: "https://kunalbhat.com",
    siteName: "Kunal Bhat",
    images: [
      {
        url: "/images/og-image.jpg",
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
      className={`${albertSans.variable} ${loraSerif.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>
        <ThemeProvider>
          <AppHeader />
          {children}
          <AppFooter />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
