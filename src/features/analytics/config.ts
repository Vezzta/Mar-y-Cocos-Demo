export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  debug: process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true",
} as const;

export const analyticsProviders = {
  ga: Boolean(analyticsConfig.gaMeasurementId),
  plausible: Boolean(analyticsConfig.plausibleDomain),
} as const;
