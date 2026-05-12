export type ManagedMediaAsset = {
  alt: string;
  fallbackSrc: string;
  localPath: string;
  status: "placeholder" | "ready";
};

function resolveManagedAsset(asset: ManagedMediaAsset) {
  return asset.status === "ready" ? asset.localPath : asset.fallbackSrc;
}

export const siteMedia: {
  homeHero: ManagedMediaAsset;
  locationEditorial: ManagedMediaAsset;
} = {
  homeHero: {
    alt: "Villa tropical frente al mar",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=85",
    localPath: "/media/site/home-hero.jpg",
    status: "placeholder",
  },
  locationEditorial: {
    alt: "Costa del Pacífico",
    fallbackSrc:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    localPath: "/media/site/location-editorial.jpg",
    status: "placeholder",
  },
};

export const resolvedSiteMedia = {
  homeHero: resolveManagedAsset(siteMedia.homeHero),
  locationEditorial: resolveManagedAsset(siteMedia.locationEditorial),
} as const;
