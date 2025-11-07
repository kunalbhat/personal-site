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
        <article className="my-24">
          <header>
            <h2>Designing Aura's Conversational Photo-Sharing Experience</h2>
            <p>
              Aura's RCS Agent started with a simple idea: what if contributing
              photos could be as easy as sending a text? I designed the
              conversational UX that brought that to life, turning everyday
              message threads into a seamless way to add photos to an Aura
              frame.
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
          <figcaption>Google RBM conversation with Aura's Agent.</figcaption>
        </article>
        <article className="my-24">
          <header>
            <h2>Aura &ndash; On-frame Captions</h2>
            <p>
              Telling the story behind photos - captions help add context to the
              multi-surface world of Aura Frames.
            </p>
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
          <figcaption>
            A few of the tools and technologies I use regularly.
          </figcaption>
        </article>
        <article className="my-16">
          <header>
            <h2>ChatGPT Nutrition Coach</h2>
            <p>
              AI-powered nutrition coach to help lower my blood sugar levels.
            </p>
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
          <figcaption>
            A few of the tools and technologies I use regularly.
          </figcaption>
        </article>
        <article className="my-16">
          <header>
            <h2>Waymo &ndash; My Car</h2>
            <p>
              Bringing personalization to Waymo &ndash; Google's autonomous
              ride-hailing service.
            </p>
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
        </article>
        <article className="my-16">
          <header>
            <h2>Skyteller Crypto Off-ramp</h2>
            <p>Empowering web3 users to easily convert crypto to cash.</p>
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
          <figcaption>
            A few of the tools and technologies I use regularly.
          </figcaption>
        </article>
        <article className="mb-16">
          <header className="md:cleaflex justify-between items-center">
            <h2>Spotify Dashboard for TMRNL</h2>
            <p>
              A Spotify Recently Played plug-in for TRMNL, an ambient e-ink
              display.
            </p>
          </header>
          <figure className="bg-[#e7e7e7] rounded-3xl w-full py-12 items-center justify-center flex col-span-2">
            <Image
              src={"/images/trmnl-dashboard-light.jpg"}
              alt="TMRNL Ambient Display"
              width={960}
              height={840}
              className="object-fit object-top scale-90"
              priority
            />
          </figure>
          <figcaption>
            A few of the tools and technologies I use regularly.
          </figcaption>
        </article>
      </main>
    </PageContainer>
  );
}
