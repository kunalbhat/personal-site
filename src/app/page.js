// React and Next utils
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

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
      <div className="app-container">
        <header className="mb-8 md:mb-16">
          <HeroHeading text="Senior product builder across design, product & engineering." />
        </header>
        <section className="md:grid grid-cols-2 mb-16">
          <div>
            <motion.h2
              variants={subheadVariant}
              initial="hidden"
              animate="show"
              className="leading-tight mb-4"
            >
              About
            </motion.h2>
            <motion.p
              variants={subheadVariant}
              initial="hidden"
              animate="show"
            ></motion.p>
          </div>
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-snug md:mr-24"
          >
            Hi, I'm Kunal &ndash; a staff-level IC based in Chicago with 18
            years of experience building in roles as a designer, product
            manager, and engineer. I'm technically inclined, a systems thinker
            and highly comfortable in new and ambiguous problem spaces.
          </motion.h2>
        </section>
        <section className="md:grid grid-cols-2 mb-16">
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight mb-4"
          >
            Experience
          </motion.h2>
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight"
          >
            From startups to large enterprises, I thrive in the 0 &rarr; 1 stage
            of the product process.
          </motion.h2>
        </section>
      </div>
      <GridOverlay columns={12} gutter={24} baseline={24} />
    </PageContainer>
  );
}
