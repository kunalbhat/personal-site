// React and Next utils
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Libraries
import { SocialIcon } from "react-social-icons/component";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import "react-social-icons/github";
import "react-social-icons/linkedin";

// Components
import ChessIcon from "./Components/ChessIcon";
import PageContainer from "./Components/PageContainer";
import GridOverlay from "./Components/GridOverlay";
import HeroHeading from "./Components/HeroHeading";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const tagsList = [
    "SQL",
    "APIs",
    "React",
    "Next.js",
    "Figma",
    "ProtoPie",
    "High fidelity prototyping",
    "Metabase",
    "Miro",
    "VSCode",
    "Mixpanel",
    "Looker",
    "User interviews",
    "User testing",
    "Research analysis",
    "Research synthesis",
    "Firebase",
    "Design systems",
    "Systems thinking",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Interaction design",
    "Information architecture",
    "Heuristics",
    "Git",
    "FigJam",
    "Journey mapping",
    "web3",
    "ChatGPT",
    "AI workflows",
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const shuffledList = shuffle(tagsList);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shouldReduce = useReducedMotion();

  // Easing + variants
  const ease = [0.22, 1, 0.36, 1];
  const linesContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        duration: 0.9,
      },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0.15 : 0.55, ease },
    },
  };

  const subheadVariant = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0.3 : 0.8, ease, delay: 0.6 }, // slower + later
    },
  };

  const headlineLines = [
    "Product designer with",
    "deep experience in",
    "complex domains.",
  ];

  return (
    <PageContainer>
      <div className="app-container">
        <header className="mb-16">
          <HeroHeading
            text="Product designer with deep experience in complex domains."
            // optional tweaks:
            // minSize="2rem"
            // fluidSize="8vw"
            // maxSize="6.5rem"
            // stagger={0.08}
            // duration={0.7}
            className="text-black"
          />
        </header>

        <section className="md:grid grid-cols-2 mb-16">
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight"
          >
            About
          </motion.h2>
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight"
          >
            I'm a staff-level IC with 18 years of experience building in roles
            as a designer, product manager, and engineer. I'm technically
            inclined, a systems thinker and highly comfortable in new and
            ambiguous problem spaces.
          </motion.h2>
        </section>
        <section className="md:grid grid-cols-2 mb-16">
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight font-bold"
          >
            Experience
          </motion.h2>
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight"
          >
            From startups to large enterprises, I thrive in 0 &rarr; 1
          </motion.h2>
        </section>
      </div>
      <GridOverlay columns={12} gutter={24} baseline={24} />
    </PageContainer>
  );
}
