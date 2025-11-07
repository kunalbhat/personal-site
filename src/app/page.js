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
        <HeroHeading
          text="Solving complex product problems through research, design, and technical depth.
"
        />
      </header>
      <main className="max-w-5xl">
        <section>
          <motion.p variants={subheadVariant} initial="hidden" animate="show">
            First and foremost a designer, I'm a technically inclined builder
            who thrives in every stage of the product process &ndash; from early
            insights to delivery. With nearly two decades of experience across
            design, product management, and engineering, I'm an end-to-end
            contributor who leads through collaboration.
          </motion.p>
        </section>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
        <figure className="rounded-[2.5rem] overflow-hidden bg-[#ebe7ee] w-full items-center flex justify-center">
          <Image
            src="/images/aura-rcs-test.gif"
            alt="Aura RCS"
            width={320}
            height={320}
            className="p-8"
          />
        </figure>
        <figure className="rounded-[2.5rem] overflow-hidden flex items-center justify-center bg-[#1d1929]">
          <ThemedImage
            lightSrc="/images/aura-rcs-light.jpg"
            darkSrc="/images/aura-rcs-dark.jpg"
            altLight="Dashboard hero in light theme"
            altDark="Dashboard hero in dark theme with muted chrome"
            className="w-full h-auto rounded-2xl shadow rounded-"
            width={1920}
            height={1080}
          />
        </figure>
      </section>
    </PageContainer>
  );
}
