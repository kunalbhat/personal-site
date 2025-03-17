import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kunal Bhat - Product Designer",
  description:
    "Kunal is a technically-oriented, fullstack product designer in Chicago with 15 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="content-container">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
