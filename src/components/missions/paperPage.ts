import type { CSSProperties } from "react";

// Real photographed paper texture, cropped to just the left/right page
// surface (avoiding the spine, gilded edges, and desk background), zoomed
// via background-size so it fills whatever height the real content needs
// without distortion or visible repeats.
const PAGES_PHOTO = "/mission-book-pages.png";

export const leftPagePhotoStyle: CSSProperties = {
  backgroundImage: `url(${PAGES_PHOTO})`,
  backgroundSize: "260%",
  backgroundPosition: "16% 45%",
  backgroundRepeat: "no-repeat",
};

export const rightPagePhotoStyle: CSSProperties = {
  backgroundImage: `url(${PAGES_PHOTO})`,
  backgroundSize: "260%",
  backgroundPosition: "84% 45%",
  backgroundRepeat: "no-repeat",
};

// Locally overrides the site's dark-canvas color tokens with ink tones
// readable against the photographed paper, scoped to whatever element
// receives this style — the global tokens in globals.css are untouched,
// so nothing outside the open book is affected.
export const paperInkStyle: CSSProperties = {
  ["--parchment" as string]: "#231908",
  ["--warmgray" as string]: "#453320",
  ["--dim" as string]: "#77613f",
  ["--hairline" as string]: "rgba(55, 36, 16, 0.22)",
  ["--inkline" as string]: "rgba(196, 79, 22, 0.42)",
} as CSSProperties;

export const paperVignetteStyle: CSSProperties = {
  background: "radial-gradient(ellipse at center, transparent 55%, rgba(30, 19, 8, 0.28) 100%)",
};
