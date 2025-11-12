// React and Next utils
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

// Libraries
import "react-social-icons/github";
import "react-social-icons/linkedin";

// Components
import PageContainer from "./Components/PageContainer";
import HeroHeading from "./Components/HeroHeading";
import ThemedImage from "./Components/ThemedImage";
import CycleHeader from "./Components/CycleHeader";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shouldReduce = useReducedMotion();

  // Easing + variants
  const ease = [0.22, 1, 0.36, 1];

  const subheadVariant = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0.3 : 0.8, ease, delay: 0.6 }, // slower + later
    },
  };

  return (
    <PageContainer>
      <header>
        <HeroHeading text="Product designer with 18 years of experience in roles as a designer, PM, and engineer." />
        {/* <CycleHeader /> */}
      </header>
      <main className="max-w-5xl">
        <section>
          <div className="flex flex-col gap-4">
            <motion.span>
              <Link
                className="text-xl flex gap-2 items-center font-semibold"
                href="/portfolio"
              >
                Projects &amp; Case Studies
                <Image
                  src="/images/icon-arrow-back.svg"
                  alt="Back arrow"
                  width={32}
                  height={32}
                  className="relative rotate-180 hover:translate-x-2 transition-transform duration-300 bg-green-50 rounded-full p-1"
                />
              </Link>
            </motion.span>

            <motion.span>
              <Link
                className="text-xl flex gap-2 items-center font-semibold"
                href="/about"
              >
                About Me
                <Image
                  src="/images/icon-arrow-back.svg"
                  alt="Back arrow"
                  width={32}
                  height={32}
                  className="relative rotate-180 hover:translate-x-2 transition-transform duration-300 bg-green-50 rounded-full p-1"
                />
              </Link>
            </motion.span>
          </div>
        </section>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-12 md:mt-24">
        <figure className="rounded-xl md:rounded-[2.5rem] overflow-hidden bg-[#ebe7ee] items-center flex justify-center">
          <Image
            src="/images/aura-rcs-test.gif"
            alt="Aura RCS"
            width={320}
            height={320}
            className="p-8"
            unoptimized
          />
        </figure>
        <figure className="rounded-xl md:rounded-[2.5rem] overflow-hidden bg-[#000000] items-center flex justify-center">
          <Image
            src="/images/skyteller.gif"
            alt="Crypto off-ramp with Skyteller"
            width={320}
            height={320}
            className="p-8"
            unoptimized
          />
        </figure>
        <figure className="rounded-xl md:rounded-[2.5rem] col-span-2 overflow-hidden flex items-center justify-center bg-[#f6f9f6]">
          <Image
            src="/images/a1c-tracker-screens.png"
            alt="Aura RCS"
            width={1024}
            height={640}
            className="px-8 py-16"
          />
        </figure>
        <figure className="rounded-xl md:rounded-[2.5rem] overflow-hidden bg-[#171717] items-center flex justify-center">
          <Image
            src="/images/trmnl-dashboard-dark.jpg"
            alt="Recently played Spotify plugin for TRMNL"
            width={1024}
            height={320}
            className="p-8"
            unoptimized
          />
        </figure>
        <figure className="rounded-xl md:rounded-[2.5rem] overflow-hidden bg-[#e7e7e7] items-center flex justify-center">
          <Image
            src="/images/trmnl-dashboard-light.jpg"
            alt="Recently played Spotify plugin for TRMNL"
            width={1024}
            height={320}
            className="p-8"
            unoptimized
          />
        </figure>
        <figure className="rounded-xl md:rounded-[2.5rem] col-span-2 overflow-hidden py-16 flex items-center justify-center bg-[#f6f6f4]">
          <Image
            src="/images/aura-captions-phone.gif"
            alt="Aura Captions app (phone)"
            width={280}
            height={840}
            className="relative left-36 lg:left-12 rounded-3xl"
            priority
            unoptimized
          />
          <Image
            src="/images/aura-captions-frame.png"
            alt="Aura Captions app (frame)"
            width={800}
            height={840}
            className="relative -right-36"
            priority
          />
        </figure>
      </section>
    </PageContainer>
  );
}
