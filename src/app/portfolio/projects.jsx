"use client";

import Image from "next/image";
import ProjectCard from "../Components/ProjectCard";

export default function ProjectsList() {
  return (
    <section>
      {/* 1) Aura RCS Agent */}
      <ProjectCard
        title="Aura's Conversational Photo-Sharing Experience"
        description="Aura's RCS Agent started with a simple idea: what if contributing photos could be as easy as sending a text? I designed the conversational UX that brought that to life, turning everyday message threads into a seamless way to add photos to an Aura frame."
        bgClass=""
        figureClass="rounded-3xl overflow-hidden"
        caption="Google RBM conversation with Aura's Agent."
      >
        <Image
          src="/images/aura-rcs-1.jpg"
          alt="Aura RCS"
          width={1920}
          height={1080}
          className="rounded-none"
          priority
        />
      </ProjectCard>

      {/* 2) Aura – On-frame Captions (two media inside figure) */}
      <ProjectCard
        title="Aura – On-frame Captions"
        description="Telling the story behind photos &ndash; captions help add context to the multi-surface world of Aura Frames."
        bgClass="bg-[#f5f6f4]"
        figureClass="overflow-hidden gap-6"
        caption="A few of the tools and technologies I use regularly."
      >
        <Image
          src="/images/aura-captions-phone.gif"
          alt="Aura Captions app (phone)"
          width={280}
          height={840}
          className="relative left-36 lg:left-12 rounded-3xl"
          priority
          unoptimized
        />
        <Image
          src="/images/aura-captions-frame.png"
          alt="Aura Captions app (frame)"
          width={800}
          height={840}
          className="relative -right-48 rounded-3xl"
          priority
        />
      </ProjectCard>

      {/* 3) ChatGPT Nutrition Coach */}
      <ProjectCard
        title="ChatGPT Nutrition Coach"
        description="AI-powered nutrition coach to help lower my blood sugar levels."
        bgClass="bg-neutral-100"
        mediaType="image"
        mediaSrc="/images/a1c-tracker-screens.png"
        mediaAlt="Screens from the A1C Tracker app"
        mediaWidth={1152}
        mediaHeight={576}
        imageProps={{
          className: "rounded-3xl object-cover object-top scale-90",
          priority: true,
        }}
        caption="A few of the tools and technologies I use regularly."
      />

      {/* 4) Waymo — My Car */}
      <ProjectCard
        title="Waymo &ndash; My Car"
        description="Bringing personalization to Waymo &ndash; Google's autonomous ride-hailing service."
        bgClass="bg-neutral-100"
        figureClass="gap-12"
        caption="The My Car tab launched in the Waymo app at the end of summer in 2025."
        visible={false}
      >
        <Image
          src="/images/waymo-my-car.png"
          alt="Waymo personalization"
          width={240}
          height={480}
          className="rounded-3xl scale-90 shadow-lg hidden md:block"
          priority
        />
        <video
          height={480}
          width={640}
          controls
          muted
          playsInline
          className="rounded-xl shadow-2xl border-8 border-white"
        >
          <source src="/images/waymo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ProjectCard>

      {/* 5) Skyteller Crypto Off-ramp */}
      <ProjectCard
        title="Skyteller Crypto Off-ramp"
        description="Empowering web3 users to easily convert crypto to cash."
        bgClass="bg-black skyteller-bg"
        mediaType="image"
        mediaSrc="/images/skyteller.gif"
        mediaAlt="Skyteller Crypto Off-ramp"
        mediaWidth={320}
        mediaHeight={840}
        imageProps={{
          className: "rounded-3xl",
          priority: true,
          unoptimized: true,
        }}
        caption="A few of the tools and technologies I use regularly."
      />

      {/* 6) Spotify Dashboard for TRMNL */}
      <ProjectCard
        title="Spotify Dashboard for TMRNL"
        description="A Spotify Recently Played plug-in for TRMNL, an ambient e-ink display."
        bgClass="bg-[#e7e7e7]"
        mediaType="image"
        mediaSrc="/images/trmnl-dashboard-light.jpg"
        mediaAlt="TMRNL Ambient Display"
        mediaWidth={960}
        mediaHeight={840}
        imageProps={{
          className: "object-fit object-top scale-90 rounded-3xl",
          priority: true,
        }}
        caption="A few of the tools and technologies I use regularly."
        className="mb-16"
      />
    </section>
  );
}
