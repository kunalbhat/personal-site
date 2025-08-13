// React utilities
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../Components/PageContainer";

export default function Portfolio() {
  return (
    <PageContainer>
      <div className="app-container">
        <header className="content-inset">
          <h1>Portfolio</h1>
        </header>
        <section className="">
          <div className="portfolio-list">
            <Link
              href="/portfolio/aura-captions"
              className="portfolio-item flex items-center justify-center hover:bg-neutral-200 transition-colors ease-in-out duration-500"
            >
              <Image
                src="/images/aura-captions-frame.png"
                alt="Aura Thumbnail"
                width={240}
                height={240}
              />
            </Link>
            <Link
              href="/portfolio/waymo"
              className="portfolio-item hover:bg-[#3375f6] transition-colors ease-in-out duration-500"
            >
              <Image
                src="/images/waymo.png"
                alt="Aura Thumbnail"
                width={800}
                height={400}
              />
            </Link>
            <Link
              href="/portfolio/skyteller"
              className="portfolio-item bg-black w-full justify-center"
            >
              <Image
                src="/images/skyteller.gif"
                alt="Skyteller"
                width={200}
                height={600}
                unoptimized
                className="mx-auto mt-8"
              />
            </Link>
            <Link
              href="/portfolio/braintree-dashboard"
              className="portfolio-item flex items-center justify-center hover:bg-gray-400 transition-colors ease-in-out duration-500"
            >
              <Image
                src="/images/braintree-dashboard.webp"
                alt="My WebP image"
                width={400}
                height={400}
                loading="lazy"
                unoptimized // remove if using next/image optimization
              />
            </Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
