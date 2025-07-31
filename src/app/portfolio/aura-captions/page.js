"use client";

import { useState, useEffect, use } from "react";

// React utilities
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../../Components/PageContainer";

export default function AuraCaptionsPage() {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlt(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageContainer>
      <div className="app-container">
        <header className="content-inset flex items-center gap-4">
          <Link
            href="/portfolio"
            className="back-button h-12 w-12 bg-neutral-100 rounded-full flex items-center justify-center"
          >
            <Image
              src="/images/icon-arrow-back.svg"
              alt="Back arrow"
              width={32}
              height={32}
              className="relative hover:-translate-x-2 transition-transform duration-300"
            />
          </Link>
          <h1>On-frame Captions for Aura</h1>
        </header>
        <section>
          <figure className="w-full overflow-hidden h-[640px]">
            <div className="rounded-3xl relative bg-neutral-100 overflow-hidden h-full flex items-center justify-center">
              <Image
                src="/images/aura-captions-phone.gif"
                alt="Aura caption entry"
                width={260}
                height={200}
                className="fade-in-delayed"
                loading="lazy"
                unoptimized
              />
              <div className="absolute right-48 top-56 h-64 w-64 ease-buttery">
                <Image
                  src="/images/aura-captions-frame.png"
                  alt="Aura on-frame captions"
                  width={400}
                  height={200}
                  className={`grow-delayed absolute inset-0 transition-opacity duration-1000 ${
                    showAlt ? "opacity-0" : "opacity-100"
                  }`}
                  loading="lazy"
                  unoptimized
                />
                <Image
                  src="/images/aura-captions-frame-2.png"
                  alt="Aura on-frame captions"
                  width={400}
                  height={200}
                  className={`grow-delayed absolute inset-0 transition-opacity duration-1000 ${
                    showAlt ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
            <figcaption className="text-sm bg-white text-gray-500 mt-2 pt-4 pb-8">
              Core screens from the Skyteller app
            </figcaption>
          </figure>
        </section>
        <section className="content-inset">
          <p>I'm a design leader who balances big-picture vision </p>
        </section>
      </div>
    </PageContainer>
  );
}
