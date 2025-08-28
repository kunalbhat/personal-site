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
        <header>
          <h1 className="leading-snug">
            Technical product designer with 18 years of building excellent
            experiences in roles as a designer, product manager, and engineer.
          </h1>
        </header>
        {/* <section>
          <p>
            From 0-1 startups to enterprise scale, I'm highly comfortable with
            ambiguity and leading through collaboration.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="grid-item bg-[#a8d0ec] flex items-center justify-center rounded-2xl">
            <Image
              src="/images/aura-wordmark.svg"
              alt="Aura wordmark"
              width={100}
              height={160}
            />
          </div>
          <div className="grid-item bg-[#7dcbfa] h-28 flex items-center justify-center rounded-2xl">
            <Image
              src="/images/paypal-wordmark.svg"
              alt="PayPal wordmark"
              width={80}
              height={160}
            />
          </div>
        </section> */}
      </div>
    </PageContainer>
  );
}
