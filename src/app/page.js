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
            <div className="p-8 border border-gray-200 bg-white shadow-sm rounded-2xl rounded-t-none z-10 border-t-0">
              <h4>Skyteller</h4>
              <p>
                Skyteller started as a dream to turn crypto into cash in just
                one click, and to make the whole crypto world more accessible
                and user-friendly. We built a bridge to your bank, allowing you
                to off-ramp straight from your wallet or your personal Skyteller
                off-ramp contract.
              </p>
            </div>
          </div>

          <div className="mb-8 lg:mb-16">
            <div className="braintree-cover" />

            <div className="p-8 border border-gray-200 bg-white shadow-sm rounded-2xl rounded-t-none z-10 border-t-0">
              <h4>Braintree Control Panel</h4>
              <p>
                As the product manager for merchant experience, I led the
                redesign of Braintree's payments dashboard. This project was a
                multi-year, cross-organizational effort that affected every
                stakeholder in the organization and Braintree's global merchant
                base.
              </p>
            </div>
          </div>

          <div className="separator"></div>

          <h3>How I think</h3>
          <p>
            These articles showcase my passion for various aspects of the design
            process and my thinking as a designer, product manager, and
            engineer.
          </p>

          <section className="flex flex-col gap-4 mt-8">
            <article className="grid grid-cols-4 items-center my-4">
              <div className="project-thumbnail col-span-1">
                <Image
                  src="/images/maze-of-games-cover.png"
                  width="200"
                  height="200"
                  alt="Turn the Tables"
                />
              </div>
              <div className="col-span-3">
                <h4>Reverse Engineering: Connections</h4>
                <p>
                  I break down an existing experience with a technical focus.
                </p>
                <p>
                  <a
                    href="https://kunalbhat.notion.site/Reverse-Engineering-Connections-by-NYT-b325a3ed84a14ddb90322887aa1cb7be"
                    target="_blank"
                  >
                    Read on Notion
                  </a>
                </p>
              </div>
            </article>
            <article className="grid grid-cols-4 items-center my-4">
              <div className="project-thumbnail">
                <Image
                  src="/images/maze-of-games-cover.png"
                  width="200"
                  height="200"
                  alt="Turn the Tables"
                />
              </div>
              <div className="col-span-3">
                <h4>Over-Engineered: Daily Dispatch</h4>
                <p>
                  I design a hypothetical app end-to-end based on a simple
                  workflow problem.
                </p>
                <p>
                  <a
                    href="https://kunalbhat.notion.site/Over-Engineered-Daily-Dispatch-50afca922c22419981a167f097f8870a"
                    target="_blank"
                  >
                    Read on Notion
                  </a>
                </p>
              </div>
            </article>
            <article className="grid grid-cols-4 items-center my-4">
              <div className="project-thumbnail">
                <Image
                  src="/images/maze-of-games-cover.png"
                  width="640"
                  height="400"
                  alt="Turn the Tables"
                />
              </div>
              <div className="col-span-3">
                <h4>Turn the Tables</h4>
                <p>
                  I built a small tool to help me solve a puzzle from one of my
                  favorite choose your own adventure puzzle books: Maze of
                  Games.
                </p>
                <p>
                  <a
                    href="https://github.com/kunalbhat/maze-of-games"
                    target="_blank"
                  >
                    Read on Github
                  </a>
                </p>
              </div>
            </article>
          </section>

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

          <div className="separator"></div>

          <footer>
            <p>
              &copy; 2025 Kunal Bhat &ndash; Built in React &ndash; Deployed
              with Vercel
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
