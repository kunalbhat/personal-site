"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  caption,
  projectLink = "/portfolio",
  // Simple media path (image OR video) — ignored if children provided:
  mediaType = "image", // "image" | "video"
  mediaSrc,
  mediaAlt = "",
  mediaWidth = 640,
  mediaHeight = 480,

  // Layout/styling:
  bgClass = "bg-neutral-100",
  figureClass = "",
  className = "",
  imageProps = {},

  // Control visibility from parent:
  visible = true,

  // If you pass children, they render inside <figure> instead of the simple media
  children,
}) {
  if (!visible) return null;

  return (
    <article className={`my-16 ${className}`}>
      <header className="mb-4">
        <span className="flex items-center gap-2 mb-2">
          <h2 className="mb-0">{title}</h2>
          <Link
            href={projectLink ? projectLink : "#"}
            aria-label={`View project: ${title}`}
          >
            <Image
              src="./images/icon-arrow-back.svg"
              alt="Arrow right"
              width={36}
              height={36}
              className="inline-block rotate-180 relative left-0 hover:left-1 transition-all h-10 w-10"
            />
          </Link>
        </span>

        {description && <p>{description}</p>}
      </header>

      <figure
        className={`${bgClass} rounded-3xl w-full flex items-center justify-center ${figureClass}`}
      >
        {children ? (
          children
        ) : mediaType === "image" ? (
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            width={mediaWidth}
            height={mediaHeight}
            className="rounded-3xl shadow-lg"
            {...imageProps}
          />
        ) : (
          <video
            height={mediaHeight}
            width={mediaWidth}
            controls
            muted
            playsInline
            className="rounded-xl shadow-2xl border-8 border-white"
          >
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </figure>

      {caption && (
        <figcaption className="mt-4 italic text-sm opacity-70">
          {caption}
        </figcaption>
      )}
    </article>
  );
}
