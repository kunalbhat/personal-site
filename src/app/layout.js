import { DM_Serif_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
  weight: "400",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Kunal Bhat - Product-minded builder",
  description: "Kunal is a highly technical, fullstack designer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm_serif_display.variable} ${work_sans.variable}`}
    >
      <body className="app-container mt-8">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
