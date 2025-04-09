// React and Next utils
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Libraries
import { animated, useSpring } from "@react-spring/web";
import { SocialIcon } from "react-social-icons/component";
// import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import "react-social-icons/github";
import "react-social-icons/linkedin";

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
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const shuffledList = shuffle(tagsList);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="h-10 mb-8 flex justify-end lg:absolute right-4 top-4">
        <span className="flex items-center justify-center h-10 w-10 bg-purple-50 hover:bg-purple-100 rounded-full cursor-pointer">
          <Image
            src="/images/icon-moon.png"
            width="24"
            height="24"
            alt="Aura Home"
          />
        </span>
      </div>
      <div className="md:grid grid-cols-3 gap-24">
        <div>
          <section className="mb-24 md:mb-8 text-center md:text-left">
            <animated.div style={styles}>
              <Image
                src="/images/kunal-bhat-avatar-2.jpg"
                height="64"
                width="64"
                alt="Kunal Bhat"
                className="rounded-full mb-4 mx-auto md:mx-0"
              />
              <h1>Kunal Bhat</h1>
              <h2>Product Designer</h2>
              <p className="mt-12 mx-8 md:mx-0">
                Technical product designer with 15+ years in roles as a
                designer, product manager, and engineer.
              </p>
              <div className="flex gap-2 my-8 w-full justify-center md:justify-start">
                <SocialIcon
                  url="https://www.github.com/kunalbhat"
                  bgColor="white"
                  fgColor="black"
                  target="_blank"
                  className="social-icon"
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/kunal-s-bhat"
                  bgColor="white"
                  fgColor="black"
                  target="_blank"
                  className="social-icon"
                />
              </div>
            </animated.div>
          </section>
        </div>
        <div className="col-span-2">
          <section>
            <h3>Experience</h3>
            <ul className="experience-list">
              <li className="active">
                <span className="icon">
                  <Image
                    src="/images/icon-tv-stand.png"
                    width="24"
                    height="16"
                    alt="Aura Home"
                  />
                </span>
                <span>
                  Product Design @{" "}
                  <a href="https://www.auraframes.com" target="_blank">
                    Aura Home
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-car.png"
                    width="24"
                    height="24"
                    alt="Magic+Might"
                  />
                </span>
                <span>
                  Design @{" "}
                  <a href="https://www.magicandmight.com" target="_blank">
                    Magic+Might
                  </a>
                  <i>
                    I designed mobile app experiences for self-driving cars.
                  </i>
                </span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-crypto.png"
                    width="24"
                    height="24"
                    alt="Galactic"
                  />
                </span>
                <span>Engineering @ Galactic</span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-identity.png"
                    width="24"
                    height="24"
                    alt="PayPal / Braintree"
                  />
                </span>
                <span>
                  PM @{" "}
                  <a
                    href="https://www.paypal.com/us/braintree"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PayPal / Braintree
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-cart.png"
                    width="24"
                    height="24"
                    alt="Modest"
                  />
                </span>
                <span>Design @ Modest</span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-user.png"
                    width="24"
                    height="24"
                    alt="dscout"
                  />
                </span>
                <span>Design @ dscout</span>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-tv.png"
                    width="24"
                    height="24"
                    alt="gravitytank"
                  />
                </span>
                <span>IXD @ gravitytank</span>
              </li>
            </ul>
          </section>

          <div className="separator"></div>

          <h3>What I've built</h3>
          <div className="mb-8 lg:mb-16">
            <div className="skyteller-cover">
              <Image
                src="/images/skyteller.gif"
                width="341"
                height="713"
                alt="Skyteller animation"
                className="scale-75"
              />
            </div>
          </div>

          <div className="mb-8 lg:mb-16">
            <div className="braintree-cover"></div>
            <h4>Braintree Control Panel</h4>
            <p>
              As the product manager for merchant experience, I led the redesign
              of Braintree's payments dashboard. This project was a multi-year,
              cross-organizational effort that affected every stakeholder in the
              organization and Braintree's global merchant base.
            </p>
          </div>

          <div className="separator"></div>

          <h3>How I think</h3>
          <p>
            These articles showcase my passion for various aspects of the design
            process and my thinking as a designer, product manager, and
            engineer.
          </p>

          <ul className="flex flex-col gap-12">
            <li className="col-span-1 flex items-center gap-12 my-12">
              <span className="bg-stone-100 rounded-full shadow-sm block h-48 w-48 overflow-hidden">
                <Image
                  src="/images/dailydispatch-cover.png"
                  width="396"
                  height="860"
                  alt="Daily Dispatch app cover"
                  className="relative w-3/4 top-6 mx-auto"
                />
              </span>
              <span>
                <h4>Reverse Engineering: Connections</h4>
                <p>
                  I break down an existing experience with a technical focus.
                </p>
                <a
                  href="https://kunalbhat.notion.site/Reverse-Engineering-Connections-by-NYT-b325a3ed84a14ddb90322887aa1cb7be"
                  target="_blank"
                >
                  Read on Notion
                </a>
              </span>
            </li>
          </ul>

          <div className="separator"></div>

          <section className="col-span-1">
            <h3>How I work</h3>
            {isClient ? (
              <ul className="grid tag-list">
                {shuffledList.map((value, key) => {
                  return <li key={key}>{value}</li>;
                })}
              </ul>
            ) : (
              "Loading..."
            )}
          </section>
          <span className="bg-black rounded-lg block h-2 w-6 rotate-45 my-12"></span>
        </div>
      </div>
    </>
  );
}
