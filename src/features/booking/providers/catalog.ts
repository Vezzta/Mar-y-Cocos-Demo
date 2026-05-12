import type { BookingProvider } from "./types";
import { externalEngineProvider } from "./external-engine-provider";
import { leadCaptureProvider } from "./lead-capture-provider";

export const bookingProviders: Record<string, BookingProvider> = {
  [leadCaptureProvider.id]: leadCaptureProvider,
  [externalEngineProvider.id]: externalEngineProvider,
};
