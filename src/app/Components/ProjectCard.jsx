"use client";

import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  caption,
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
        <h2>{title}</h2>
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
