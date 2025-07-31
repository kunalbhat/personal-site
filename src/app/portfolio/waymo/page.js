// React utilities
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../../Components/PageContainer";

export default function WaymoPage() {
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
          <h1>Waymo</h1>
        </header>
        <section>
          <figure className="w-full h-[640px] overflow-hidden">
            <div className="rounded-3xl bg-[#3375f6]">
              <Image
                src="/images/waymo.png"
                alt="Waymo"
                width={1200}
                height={600}
                className="slide-delayed mx-auto"
                loading="lazy"
                unoptimized
              />
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
