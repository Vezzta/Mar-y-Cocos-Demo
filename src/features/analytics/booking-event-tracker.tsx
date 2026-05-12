"use client";

import { useEffect } from "react";
import { trackEvent } from "./track";

export function BookingEventTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const genericAnalyticsElement = target.closest("[data-analytics-event]");

      if (genericAnalyticsElement instanceof HTMLElement) {
        const eventName = genericAnalyticsElement.dataset.analyticsEvent;
        const category = genericAnalyticsElement.dataset.analyticsCategory;
        const label = genericAnalyticsElement.dataset.analyticsLabel;

        if (eventName && category) {
          trackEvent({
            name: eventName,
            category: category as "booking" | "navigation" | "media",
            label,
            metadata: {
              text: genericAnalyticsElement.innerText?.trim(),
            },
          });
        }
      }

      const bookingElement = target.closest("[data-booking-event]");

      if (!(bookingElement instanceof HTMLElement)) {
        return;
      }

      const eventName = bookingElement.dataset.bookingEvent;
      const actionKind = bookingElement.dataset.bookingKind;

      if (!eventName) {
        return;
      }

      trackEvent({
        name: eventName,
        category: "booking",
        label: actionKind,
        metadata: {
          actionKind,
          text: bookingElement.innerText?.trim(),
        },
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
