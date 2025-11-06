// components/ThemedImage.js
export default function ThemedImage({
  lightSrc,
  darkSrc,
  altLight,
  altDark, // optional but recommended if the dark image conveys a different vibe
  className = "",
  sizes = "(min-width: 768px) 768px, 100vw",
  width,
  height,
  loading = "lazy",
}) {
  // If altDark not provided, fall back to altLight
  const finalAltDark = altDark || altLight;

  return (
    <picture>
      <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
      {/* You can also add AVIF/WEBP sources if you generate them */}
      {/* <source srcSet="/path/file-dark.avif" type="image/avif" media="(prefers-color-scheme: dark)" /> */}
      {/* <source srcSet="/path/file-light.avif" type="image/avif" media="(prefers-color-scheme: light)" /> */}
      <img
        src={lightSrc}
        alt={finalAltDark} // browsers expose <img>’s alt; ideally the platform would let per-source alts
        className={className}
        sizes={sizes}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
