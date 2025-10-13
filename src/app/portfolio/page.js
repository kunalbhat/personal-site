// React utilities
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../Components/PageContainer";
import HeroHeading from "../Components/HeroHeading";

export default function Portfolio() {
  return (
    <PageContainer>
      <div className="app-container">
        <header>
          <HeroHeading text="Portfolio" />
        </header>
        <section className="my-24">
          <header className="flex justify-between items-center">
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
        <section>
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
        </section>
        <section className="grid grid-cols-3 gap-12">
          <div className="col-span-1">
            <div>
              <h3>TRMNL &ndash; Spotify Recently Dashboard</h3>
              <p>
                Built a TRMNL dashboard app that renders a dynamic “Recently
                Played” album grid from my Spotify activity, powered by a
                serverless Node.js endpoint on Vercel that outputs a clean JSON
                feed in TRMNL's schema. Optimized for a semi-static screen
                without webhooks, it passively updates with album art and
                metadata as I listen.
              </p>
            </div>
            <div>
              <ul className="tag-list">
                <li>iOS</li>
              </ul>
            </div>
          </div>
          <figure className="bg-neutral-100 rounded-3xl w-full py-12 items-center justify-center flex col-span-2">
            <Image
              src={"/images/trmnl-spotify.png"}
              alt="TMRNL Ambient Display"
              width={960}
              height={640}
              className="object-fit object-top scale-90"
              priority
            />
          </figure>
          <figcaption className="mb-6 italic text-sm opacity-70">
            A few of the tools and technologies I use regularly.
          </figcaption>
        </section>
      </div>
    </PageContainer>
  );
}
