// Widths of the variants scripts/generate-images.mjs writes; keep in sync.
export const WERK_WIDTHS = [480, 960];
export const AVATAR_WIDTHS = [128, 192];

// Before/after screenshots (images/werk/screens/): widths and the intrinsic size
// of the largest variant, for width/height on the <img>.
export const SCREENS = {
    desktop: { widths: [480, 960], width: 960, height: 600 },
    mobiel: { widths: [240, 480], width: 480, height: 1040 }
} as const;

export const werkImage = (name: string) => `/images/werk/${name}`;
export const AVATAR = '/images/avatar/hans-2020';
export const screenImage = (name: string) => `/images/werk/screens/${name}`;
