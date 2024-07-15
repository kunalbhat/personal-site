// React and Next utils
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Libraries
import { animated, useSpring } from "@react-spring/web";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const styles = useSpring({
    from: {
      opacity: 0,
      y: 10,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  const tagsList = [
    "SQL",
    "APIs",
    "React",
    "Next.js",
    "Figma",
    "ProtoPie",
    "High fidelity prototyping",
    "Miro",
    "VSCode",
    "Mixpanel",
    "Looker",
    "User research",
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
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const shuffledList = shuffle(tagsList);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="content-container">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <h1 className="mb-4">Kunal Bhat</h1>
            <h2>Senior Product Designer</h2>
            <p>
              I combine 15+ years of building and delivering excellent
              experiences in roles as a product designer, product manager, and
              frontend engineer. I'm a systems thinker, technically oriented,
              and highly comfortable in new and ambiguous problem spaces.
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
}
