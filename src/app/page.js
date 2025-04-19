// React and Next utils
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Libraries
import { animated, useSpring } from "@react-spring/web";
import { SocialIcon } from "react-social-icons/component";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
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
    "ChatGPT",
    "AI workflows",
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const shuffledList = shuffle(tagsList);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="md:grid grid-cols-3 gap-24">
        <aside>
          <section className="my-24 md:mt-0 md:mb-8 md:fixed md:w-96 md:pr-12 text-center md:text-left">
            <animated.div style={styles}>
              <Image
                src="/images/kunal-bhat-avatar.jpg"
                height="64"
                width="64"
                alt="Kunal Bhat"
                className="rounded-full mb-4 mx-auto md:mx-0"
              />
              <h1>
                Kunal Bhat <br />
                Product Designer
              </h1>
              <p className="mt-8 mx-8 md:mx-0">
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
                <a
                  className="social-icon"
                  href="https://www.chess.com/member/kunal332"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="scale-50"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M49.98 16c-5 0-9.025 3.82-9.025 8.555 0 2.695 1.31 5.11 3.364 6.681-6.054 2-10.338 7.09-10.338 13.077 0 5.255 3.3 9.829 8.204 12.222C30.655 60.517 22.25 72.38 22.25 87.289c0 .58.016 1.139.041 1.711h55.42c.025-.572.041-1.131.041-1.711 0-14.909-8.406-26.772-19.936-30.754 4.904-2.393 8.204-6.967 8.204-12.222 0-5.986-4.284-11.077-10.338-13.077 2.054-1.571 3.364-3.986 3.364-6.68C59.045 19.82 54.98 16 49.98 16z"
                        color="#000"
                        stroke="#000"
                        strokeWidth="2"
                        overflow="visible"
                        style={{ marker: "none" }}
                      ></path>
                    </svg>
                  </svg>
                </a>
              </div>
            </animated.div>
          </section>
        </aside>
        <main className="col-span-2">
          <section aria-label="Work Experience">
            <h2>Experience</h2>
            <ul className="experience-list">
              <li className="active" aria-current="true">
                <span className="icon">
                  <Image
                    src="/images/icon-tv.svg"
                    width="24"
                    height="16"
                    alt="Aura Home"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">
                    Product Design @{" "}
                    <a
                      href="https://www.auraframes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aura Home
                    </a>
                  </span>
                  <p>
                    Currently shipping experiences for the internet's favorite
                    digital frame.
                  </p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-car.svg"
                    width="24"
                    height="24"
                    alt="Magic+Might"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">
                    Design @{" "}
                    <a
                      href="https://www.magicandmight.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Magic+Might
                    </a>
                  </span>
                  <p>Designed mobile app experiences for self-driving cars.</p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-crypto.svg"
                    width="24"
                    height="24"
                    alt="Galactic"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">Engineering @ Galactic</span>
                  <p>Built a crypto off-ramp product for web3 users.</p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-identity.svg"
                    width="24"
                    height="24"
                    alt="PayPal / Braintree"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">
                    PM @{" "}
                    <a
                      href="https://www.paypal.com/us/braintree"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PayPal / Braintree
                    </a>
                  </span>
                  <p>
                    Launched a new version of the Braintree merchant dashboard.
                  </p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-cart.svg"
                    width="24"
                    height="24"
                    alt="Modest"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">Design @ Modest</span>
                  <p>
                    Designed commerce experiences for mobile checkout (acq by
                    PayPal).
                  </p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-user.svg"
                    width="24"
                    height="24"
                    alt="dscout"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">
                    Design @{" "}
                    <a
                      href="https://www.dscout.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dscout
                    </a>
                  </span>
                  <p>
                    Designed and built the first major iterations of dscout's
                    user research platform.
                  </p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <Image
                    src="/images/icon-tv-stand.svg"
                    width="24"
                    height="24"
                    alt="gravitytank"
                  />
                </span>
                <div className="experience-content">
                  <span className="font-bold">IXD @ gravitytank</span>
                  <p>
                    Designed future experiences for the consumer electronics
                    space.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <div className="separator"></div>

          <h2>What I've built</h2>
          <div className="mb-8 lg:mb-16">
            <header className="mt-8 mb-4 flex items-center gap-2">
              <h3>Aura Frames App</h3>
              <a
                href="https://apps.apple.com/us/app/aura-frames/id990062908"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            </header>
            <div className="aura-cover">
              <Image
                src="/images/aura-captions-phone-3.gif"
                width="341"
                height="713"
                alt="Aura app - captions animation"
                className="relative left-24 top-20 md:left-20 md:top-6"
              />
              <Image
                src="/images/aura-captions-frame.png"
                width="400"
                height="300"
                alt="Aura app - captions on frame"
                className="relative top-1 -right-32"
              />
            </div>
            <div className="p-6 md:p-8 border border-gray-200 bg-white shadow-sm rounded-2xl rounded-t-none z-10 border-t-0">
              <ul className="tag-list mb-4">
                <li>iOS</li>
                <li>Android</li>
                <li>Hardware</li>
                <li>Consumer-facing</li>
              </ul>
              <p>
                I design features for the Aura app and on-frame experience,
                focusing on intuitive, family-friendly ways to share and enjoy
                memories.
              </p>
            </div>
          </div>

          <div className="mb-8 lg:mb-16">
            <header className="mt-8 mb-4">
              <h3>Skyteller @ Galactic</h3>
            </header>
            <div className="skyteller-cover">
              <Image
                src="/images/skyteller.gif"
                width="341"
                height="713"
                alt="Skyteller animation"
                className="scale-75"
              />
            </div>
            <div className="project-description">
              <ul className="tag-list mb-4">
                <li>Mobile web</li>
                <li>Crypto</li>
                <li>web3</li>
              </ul>
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
            <header className="mt-8 mb-4 flex items-center gap-4">
              <h3>Braintree Control Panel @ Braintree / PayPal</h3>
              <span>
                <a href="https://www.paypal.com/us/braintree">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </a>
              </span>
            </header>
            <div className="braintree-cover" />

            <div className="project-description">
              <ul className="tag-list mb-4">
                <li>Web</li>
                <li>Enterprise</li>
              </ul>
              <p>
                As product manager for merchant experience, I led the redesign
                of Braintree's payments dashboard. This project was a
                multi-year, cross-organizational effort that affected every
                stakeholder in the organization and Braintree's global merchant
                base.
              </p>
            </div>
          </div>

          <div className="separator"></div>

          <h2>How I think</h2>
          <p>
            These articles showcase my passion for various aspects of the design
            process and my thinking as a designer, product manager, and
            engineer.
          </p>

          <section className="md:grid grid-cols-3 gap-4 text-center mt-8">
            <article className="small-projects-item">
              <Image
                src="/images/connections-icon.png"
                width="64"
                height="64"
                alt="NYT: Connections"
              />
              <h3>Reverse Engineering: Connections</h3>
              <p>I break down an existing experience with a technical focus.</p>
              <p className="my-4">
                <a
                  href="https://kunalbhat.notion.site/Reverse-Engineering-Connections-by-NYT-b325a3ed84a14ddb90322887aa1cb7be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Notion
                </a>
              </p>
            </article>
            <article className="small-projects-item">
              <Image
                src="/images/dailydispatch-icon.svg"
                width="64"
                height="64"
                alt="Daily Dispatch"
              />
              <h3>
                Over-Engineered: <br className="md:block hidden" />
                Daily Dispatch
              </h3>
              <p>
                I design a hypothetical app end-to-end based on a workflow
                problem.
              </p>
              <p className="my-4">
                <a
                  href="https://kunalbhat.notion.site/Over-Engineered-Daily-Dispatch-50afca922c22419981a167f097f8870a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Notion
                </a>
              </p>
            </article>
            <article className="small-projects-item">
              <Image
                src="/images/maze-of-games-icon.svg"
                width="64"
                height="64"
                alt="Maze of Games tool>"
              />
              <h3>
                Maze of Games: <br className="md:block hidden" />
                Turn the Tables
              </h3>
              <p>
                I built a small tool to help me solve a puzzle from{" "}
                <a
                  href="https://lonesharkgames.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  Maze of Games
                </a>
                .
              </p>
              <p className="my-4">
                <a
                  href="https://github.com/kunalbhat/maze-of-games"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Github
                </a>
              </p>
            </article>
          </section>

          <div className="separator" />

          <section className="col-span-1">
            <header className="mb-8">
              <h2>How I work</h2>
              <p>
                Tools and activities I use often and am highly comfortable with.
              </p>
            </header>

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
            <p className="text-sm">
              &copy; 2025 Kunal Bhat &ndash; Built in React &ndash; Deployed
              with Vercel
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
