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
              {/* <span className="bg-black rounded-lg block h-2 w-6 rotate-45 my-12"></span> */}
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
          <div className="">
            <section>
              <h3>Experience</h3>
              <ul className="experience-list">
                <li className="active">
                  <span className="icon">
                    <Image
                      src="/images/icon-tv-stand.png"
                      width="24"
                      height="24"
                      alt="Aura Home"
                    />
                  </span>
                  <span>
                    Product Design @{" "}
                    <a href="https://www.auraframes.com" target="_blank">
                      Aura Home
                    </a>
                  </span>
                  <span className="icon ml-2">
                    <Image
                      src="/images/icon-arrow-link.png"
                      width="24"
                      height="24"
                      alt="External link icon"
                    />
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
                  </span>
                  <span className="icon ml-2">
                    <Image
                      src="/images/icon-arrow-link.png"
                      width="24"
                      height="24"
                      alt="External link icon"
                    />
                  </span>
                  {/* <span className="lg:block hidden text-gray-400 ml-4">
                    I designed experiences for self-driving cars.
                  </span> */}
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
                  <span className="icon ml-2">
                    <Image
                      src="/images/icon-arrow-link.png"
                      width="24"
                      height="24"
                      alt="External link icon"
                    />
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
          </div>
          <span className="bg-black rounded-lg block h-2 w-6 rotate-45 my-12"></span>
          <h3>Projects</h3>
          <section className="mb-8 lg:mb-16">
            <div className="overflow-hidden relative mx-auto w-full flex col-span-3 shadow-lg rounded-2xl bg-[#F9F8F6] items-center justify-center h-96">
              <Image
                src="/images/aura-captions-phone-3.gif"
                width="341"
                height="713"
                alt="Aura app - captions animation"
                className="relative left-20 top-6"
              />
              <Image
                src="/images/aura-captions-frame.png"
                width="400"
                height="300"
                alt="Aura app - captions on frame"
                className="relative top-1 -right-32"
              />
            </div>
            {/* <h4>Aura Frames &ndash; Captions v1</h4> */}
          </section>

          <section className="mb-8 lg:mb-16">
            <div className="skyteller-cover overflow-hidden mx-auto w-full mb-8 lg:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-indigo-950 items-center justify-center h-96">
              <Image
                src="/images/skyteller.gif"
                width="341"
                height="713"
                alt="Skyteller animation"
                className="scale-75"
              />
            </div>
            {/* <h4>Skyteller &ndash; Crypto offramp</h4> */}
          </section>

          <section className="mb-8 lg:mb-16">
            <div className="braintree-cover mb-8 lg:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-white items-center justify-center h-80 md:h-96"></div>
          </section>

          {/* <section className="grid-flow-row grid lg:grid-flow-col lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="col-span-1">
              <article>
                <a
                  href="https://kunalbhat.notion.site/Reverse-Engineering-Connections-by-NYT-b325a3ed84a14ddb90322887aa1cb7be"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline flex gap-1 items-center"
                >
                  <span className="case-study reverse-engineering">
                    <Image
                      src="/images/connections-cover.png"
                      width="150"
                      height="150"
                      alt="Daily Dispatch app cover"
                      className="relative"
                    />
                  </span>
                </a>
                <h4 className="mt-4">Reverse Engineering: Connections</h4>
                <p>
                  I break down an existing experience with a technical focus.
                </p>
                <a
                  href="https://kunalbhat.notion.site/Reverse-Engineering-Connections-by-NYT-b325a3ed84a14ddb90322887aa1cb7be"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline flex gap-1 items-center"
                >
                  Read on Notion
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </article>
              <article className="mt-12">
                <a
                  href="https://github.com/kunalbhat/maze-of-games"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline flex gap-1 items-center"
                >
                  <span className="case-study maze-of-games"></span>
                </a>
                <h4 className="mt-4">Turn the Tables</h4>
                <p>
                  I built a small tool to help me solve a puzzle from one of my
                  favorite choose your own adventure puzzle books:{" "}
                  <a
                    href="https://www.lonesharkgames.com/maze/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Maze of Games
                  </a>
                  .
                </p>
                <a
                  href="https://github.com/kunalbhat/maze-of-games"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline flex gap-1 items-center"
                >
                  Read on Github
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </article>
            </div>
            <div className="col-span-1">
              <a
                href="https://kunalbhat.notion.site/Over-Engineered-Daily-Dispatch-50afca922c22419981a167f097f8870a"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline flex gap-1 items-center"
              >
                <span className="case-study daily-dispatch">
                  <Image
                    src="/images/dailydispatch-cover.png"
                    width="396"
                    height="860"
                    alt="Daily Dispatch app cover"
                    className="relative mt-96 hover:mt-72 transition-all"
                  />
                </span>
              </a>
              <h4 className="mt-4">Over-Engineered: Daily Dispatch</h4>
              <p>
                I design a hypothetical app end-to-end based on a simple
                workflow problem.
              </p>
              <a
                href="https://kunalbhat.notion.site/Over-Engineered-Daily-Dispatch-50afca922c22419981a167f097f8870a"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline flex gap-1 items-center"
              >
                Read on Notion
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </section> */}
          <span className="bg-black rounded-lg block h-2 w-6 rotate-45 my-12"></span>
          <h3>Experiments</h3>

          <ul>
            <li className="flex items-center gap-4 my-8">
              <span className="bg-gray-200 rounded-lg block h-12 w-12"></span>
              <span>Reverse Engineering &ndash; Connections by NYT Games</span>
            </li>
            <li className="flex items-center gap-4 my-8">
              <span className="bg-gray-200 rounded-lg block h-12 w-12"></span>
              <span>Over-engineering &ndash; Daily Dispatch app</span>
            </li>
            <li className="flex items-center gap-4 my-8">
              <span className="bg-gray-200 rounded-lg block h-12 w-12"></span>
              <span>Turn the Tables &ndash; Codebreaking puzzle</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
