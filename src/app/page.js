// React and Next utils
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Libraries
import { animated, useSpring } from "@react-spring/web";
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
      <div className="lg:grid grid-cols-3 gap-24">
        <div>
          <section className="mb-8 text-center md:text-left">
            <animated.div style={styles}>
              <Image
                src="/images/kunal-bhat-avatar-2.jpg"
                height="64"
                width="64"
                alt="Kunal Bhat"
                className="rounded-full mb-4 mx-auto lg:mx-0"
              />
              <h1>Kunal Bhat</h1>
              <h2>Product Designer</h2>
              <p className="mt-12">
                Technical product designer with 15+ years in roles as a
                designer, product manager, and engineer.
              </p>
              <span className="bg-black rounded-lg block h-2 w-6 rotate-45 my-12"></span>
            </animated.div>
          </section>
        </div>
        <div className="col-span-2">
          <div className="">
            <section>
              <h3>Experience</h3>
              <ul className="experience-list">
                <li>
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
                  <span className="icon">
                    <Image
                      src="/images/icon-arrow-link.png"
                      width="24"
                      height="24"
                      alt="External link icon"
                    />
                  </span>
                  <span className="lg:block hidden text-gray-400 ml-4">
                    I designed experiences for self-driving cars.
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
                  <span>PM @ PayPal / Braintree</span>
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
          <section className="skyteller-cover overflow-hidden mx-auto w-full mb-8 lg:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-indigo-950 items-center justify-center h-96">
            <Image
              src="/images/skyteller.gif"
              width="341"
              height="713"
              alt="Skyteller animation"
              className="scale-75"
            />
          </section>
        </div>
      </div>
    </>
  );
}
