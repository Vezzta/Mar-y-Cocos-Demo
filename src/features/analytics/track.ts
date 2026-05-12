import { analyticsConfig, analyticsProviders } from "./config";
import type { AnalyticsEvent } from "./types";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: event.name,
    event_category: event.category,
    event_label: event.label,
    ...event.metadata,
  };

  window.dataLayer?.push(payload);

  if (analyticsProviders.ga && typeof window.gtag === "function") {
    window.gtag("event", event.name, {
      event_category: event.category,
      event_label: event.label,
      ...event.metadata,
    });
  }

  if (analyticsProviders.plausible && typeof window.plausible === "function") {
    window.plausible(event.name, { props: event.metadata });
  }

  if (analyticsConfig.debug) {
    console.info("[analytics]", payload);
  }
}
