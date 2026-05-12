export type AnalyticsEvent = {
  name: string;
  category: "booking" | "navigation" | "media";
  label?: string;
  metadata?: Record<string, string | number | boolean | undefined>;
};
