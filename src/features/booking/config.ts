import { leadCaptureProvider } from "./providers/lead-capture-provider";

export const bookingRoadmap = {
  currentOption: "A",
  plannedOption: "B",
  notes:
    "Hoy el sitio opera como captación; la integración con PMS/booking engine se activará posteriormente sin rehacer la UI principal.",
} as const;

export const activeBookingProvider = leadCaptureProvider;
