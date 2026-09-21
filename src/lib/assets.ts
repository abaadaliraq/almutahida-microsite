export const brandAssets = {
  logo: "/brand/almutahida-logo.png",
} as const;

export const videoAssets = {
  hero: "/videos/hero.mp4",
  exhibition: "/videos/exhibition.mp4",
  factoryOverview: "/videos/factory-overview.mp4",
} as const;

export function tourAssetPath(slug: string, filename: string) {
  return `/tours/${slug}/${filename}`;
}

export function exhibitionAssetPath(filename: string) {
  return `/exhibition/${filename}`;
}
