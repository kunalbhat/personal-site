import { Albert_Sans } from "next/font/google";

import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kunal Bhat - Product Designer",
  description:
    "Kunal is a technically-oriented, fullstack product designer in Chicago with 15 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albertSans.variable} antialiased`}>
      <body className="content-container">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
