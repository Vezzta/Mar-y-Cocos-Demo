import { bookingProviders } from "./providers/catalog";
import type { BookingActionKey, BookingProvider } from "./providers/types";

const DEFAULT_BOOKING_PROVIDER_ID = "lead-capture";

function resolveBookingProvider(providerId?: string): BookingProvider {
  if (!providerId) {
    return bookingProviders[DEFAULT_BOOKING_PROVIDER_ID];
  }

  return bookingProviders[providerId] ?? bookingProviders[DEFAULT_BOOKING_PROVIDER_ID];
}

export const bookingRoadmap = {
  currentOption: "A",
  plannedOption: "B",
  notes:
    "Hoy el sitio opera como captación; la integración con PMS/booking engine se activará posteriormente sin rehacer la UI principal.",
} as const;

export const bookingRuntimeConfig = {
  defaultProviderId: DEFAULT_BOOKING_PROVIDER_ID,
  selectedProviderId:
    process.env.NEXT_PUBLIC_BOOKING_PROVIDER ?? DEFAULT_BOOKING_PROVIDER_ID,
} as const;

export const activeBookingProvider = resolveBookingProvider(
  bookingRuntimeConfig.selectedProviderId,
);

export const activeBookingMode = activeBookingProvider.mode;

export function getBookingAction(actionKey: BookingActionKey) {
  return activeBookingProvider.actions[actionKey];
}
