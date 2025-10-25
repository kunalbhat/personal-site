// React and Next utils
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

import Image from "next/image";

// Libraries
import "react-social-icons/github";
import "react-social-icons/linkedin";

// Components
import PageContainer from "./Components/PageContainer";
import GridOverlay from "./Components/GridOverlay";
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
      <div>
        <header>
          <HeroHeading
            text="Solving complex product problems through research, design, and technical depth.
"
          />
        </header>
        <section>
          <motion.p variants={subheadVariant} initial="hidden" animate="show">
            I'm a technically inclined builder who thrives in every stage of the
            product process – from early insights to delivery. With nearly two
            decades of experience across design, product management, and
            engineering, I'm an end-to-end contributor who leads through
            collaboration.
          </motion.p>
          <motion.div
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2"
          >
            <span className="text-lg">Learn more about me</span>
            <Image
              src="/images/icon-arrow-back.svg"
              alt="Arrow Icon"
              width={32}
              height={32}
              className="rotate-180 h-8 w-8"
            />
          </motion.div>
        </section>
      </div>
      <GridOverlay columns={12} gutter={24} baseline={24} />
    </PageContainer>
  );
}
