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
            I'm a technically inclined builder who thrives in every stage of the
            product process &ndash; from early insights to delivery. With nearly
            two decades of experience across design, product management, and
            engineering, I'm an end-to-end contributor who leads through
            collaboration.
          </motion.p>
          <motion.div
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4"
          >
            <span className="text-2xl font-headline">Learn more about me</span>
            <Link
              href="/about"
              className="h-12 w-12 bg-[var(--link-bg-hover,inherit)] rounded-full flex items-center justify-center"
            >
              <Image
                src="/images/icon-arrow-back.svg"
                alt="Back arrow"
                width={32}
                height={32}
                className="rotate-180 relative hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </section>
      </main>
    </PageContainer>
  );
}
