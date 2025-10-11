// React and Next utils
"use client";
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

  return (
    <PageContainer>
      <div className="app-container">
        <header className="mb-16">
          <h1 className="leading-none">
            Product designer with deep experience in complex domains.
          </h1>
        </header>
        <section className="max-w-3xl mb-16">
          <h2 className="leading-tight">
            I'm a staff-level IC with 18 years of experience building in roles
            as a designer, product manager, and engineer. I'm technically
            inclined, a systems thinker and highly comfortable in new and
            ambiguous problem spaces.
          </h2>
        </section>
      </div>
    </PageContainer>
  );
}
