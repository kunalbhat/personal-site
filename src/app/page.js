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
          <HeroHeading text="Product designer with deep experience in complex domains." />
        </header>
        <section>
          <header className="flex justify-between items-center">
            <div>
              <h3>Personal Project</h3>
              <h2>ChatGPT Nutrition Coach</h2>
              <p>
                I built an AI-powered nutrition coach to help lower my blood
                sugar levels.
              </p>
            </div>
            <div>
              <ul className="tag-list">
                <li>ChatGPT</li>
                <li>iOS</li>
                <li>Prototype</li>
              </ul>
            </div>
          </header>
          <figure className="bg-neutral-100 rounded-3xl w-full py-12 items-center justify-center flex">
            <Image
              src="/images/a1c-tracker-screens.png"
              alt="Screens from the A1C Tracker app"
              width={1152}
              height={576}
              className="rounded-3xl object-cover object-top scale-90"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
        <section>
          <header className="flex justify-between items-center">
            <div>
              <h3>Waymo</h3>
              <h2>Bringing personalization to Waymo</h2>
              <p>
                I built an AI-powered nutrition coach to help lower my blood
                sugar levels.
              </p>
            </div>
            <div>
              <ul className="tag-list">
                <li>ChatGPT</li>
                <li>iOS</li>
                <li>Prototype</li>
              </ul>
            </div>
          </header>
          <figure className="bg-neutral-100 rounded-3xl w-full py-12 items-center justify-center flex">
            <Image
              src={"/images/waymo-my-car.png"}
              alt="Waymo personalization"
              width={640}
              height={360}
              className="rounded-3xl object-cover object-top scale-90"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
        <section className="md:grid grid-cols-2 mb-16">
          <motion.h2
            variants={subheadVariant}
            initial="hidden"
            animate="show"
            className="leading-tight mb-4"
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
            From startups to large enterprises, I thrive in 0 &rarr; 1
          </motion.h2>
        </section>
      </div>
      <GridOverlay columns={12} gutter={24} baseline={24} />
    </PageContainer>
  );
}
