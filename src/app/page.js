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
          <h1 className="leading-snug">
            Technical product designer with 18 years of building excellent
            experiences in roles as a designer, product manager, and engineer.
          </h1>
        </header>
        <section>
          <h3 className="mb-12">Experience</h3>
          <dl className="experience-list">
            <dt>Aura Home</dt>
            <dd>
              Shipping experiences for the internet's favorite digital frame.
            </dd>
            <dt>Magic + Might</dt>
            <dd>
              Dove deep into the autonomous ride-hail problem space while
              embedded with the Waymo design team.
            </dd>
            <dt>Galactic</dt>
            <dd>Built a crypto off-ramp for web3 users.</dd>
            <dt>PayPal / Braintree</dt>
            <dd>I launched a redesign of the Braintree merchant dashboard.</dd>
          </dl>
        </section>
      </div>
    </PageContainer>
  );
}
