// React utilities
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../Components/PageContainer";
import HeroHeading from "../Components/HeroHeading";

export default function Portfolio() {
  return (
    <PageContainer>
      <header>
        <HeroHeading text="My Work" />
      </header>
      <main>
        <section className="mt-24">
          <header>
            <h2>Conversational UX</h2>
            <p>
              I designed conversational UX for the Aura RCS Agent. This feature
              opened up a brand new path for Aura users to easily contribute
              photos by meeting them where they already area &mdash; in their
              messaging apps.
            </p>
          </header>
          <figure className="rounded-3xl overflow-hidden">
            <Image
              src="/images/aura-rcs-1.jpg"
              alt="Aura RCS"
              width={1920}
              height={1080}
            />
          </figure>
          <figcaption className="text-sm mt-2 mb-6 text-center">
            Google RBM conversation with Aura's Agent.
          </figcaption>
        </section>
        <section>
          <header className="md:flex justify-between items-center">
            <div>
              <h2>Aura - On-frame Captions</h2>
              <p>Adding context to the multi-surface world of Aura Frames.</p>
            </div>
            <div>
              <ul className="tag-list">
                <li>Android</li>
                <li>iOS</li>
                <li>Hardware</li>
              </ul>
            </div>
          </header>
          <figure className="bg-[#f5f6f4] rounded-3xl w-full py-12 items-center justify-center flex overflow-hidden">
            <Image
              src={"/images/aura-captions-phone.gif"}
              alt="Aura Captions app"
              width={280}
              height={840}
              className="relative left-36 lg:left-12"
              priority
            />
            <Image
              src={"/images/aura-captions-frame.png"}
              alt="Aura Captions app"
              width={800}
              height={840}
              className="relative -right-48"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
        <section className="mb-24">
          <header className="md:flex justify-between items-center">
            <div>
              <h3>ChatGPT Nutrition Coach</h3>
              <p>
                AI-powered nutrition coach to help lower my blood sugar levels.
              </p>
            </div>
            <div>
              <ul className="tag-list">
                <li>ChatGPT</li>
                <li>iOS</li>
                <li>Prototype</li>
              </ul>
            </div>
          </header>
          <figure className="bg-neutral-100 rounded-3xl w-full py-12 items-center justify-center flex">
            <Image
              src="/images/a1c-tracker-screens.png"
              alt="Screens from the A1C Tracker app"
              width={1152}
              height={576}
              className="rounded-3xl object-cover object-top scale-90"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
        {/* <section>
          <header className="flex justify-between items-center">
            <div>
              <h3>Waymo &ndash; My Car</h3>
              <p>
                Bringing personalization to Waymo &ndash; Google's autonomous
                ride-hailing service.
              </p>
            </div>
            <div>
              <ul className="tag-list">
                <li>iOS</li>
              </ul>
            </div>
          </header>
          <figure className="bg-neutral-100 rounded-3xl w-full py-12 items-center justify-center flex">
            <Image
              src={"/images/waymo-my-car.png"}
              alt="Waymo personalization"
              width={340}
              height={360}
              className="rounded-3xl object-cover object-top scale-90"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section> */}
        <section className="mb-24">
          <header className="flex justify-between items-center">
            <div>
              <h3>Skyteller Crypto Off-ramp</h3>
              <p>Empowering web3 users to easily convert crypto to cash.</p>
            </div>
            <div>
              <ul className="tag-list">
                <li>ChatGPT</li>
                <li>iOS</li>
                <li>Prototype</li>
              </ul>
            </div>
          </header>
          <figure className="bg-black rounded-3xl w-full py-12 items-center justify-center flex col-span-2 skyteller-bg">
            <Image
              src={"/images/skyteller.gif"}
              alt="TMRNL Ambient Display"
              width={320}
              height={840}
              className="rounded-3xl"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
        <section className="mb-24">
          <header className="md:cleaflex justify-between items-center">
            <div>
              <h3>Spotify Dashboard for TMRNL</h3>
              <p>
                A Spotify Recently Played plug-in for TRMNL, an ambient e-ink
                display.
              </p>
            </div>
            <div>
              <ul className="tag-list">
                <li>ChatGPT</li>
                <li>iOS</li>
                <li>Prototype</li>
              </ul>
            </div>
          </header>
          <figure className="bg-fuchsia-50 rounded-3xl w-full py-12 items-center justify-center flex col-span-2">
            <Image
              src={"/images/trmnl-spotify.png"}
              alt="TMRNL Ambient Display"
              width={960}
              height={840}
              className="object-fit object-top scale-90"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
      </main>
    </PageContainer>
  );
}
