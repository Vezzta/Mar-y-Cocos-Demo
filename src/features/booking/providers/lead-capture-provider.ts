import type { BookingProvider } from "./types";

export const leadCaptureProvider: BookingProvider = {
  id: "lead-capture",
  mode: "lead_capture",
  providerName: "internal-lead-flow",
  presentation: {
    primaryCta: "Ver disponibilidad",
    stickyCta: "Reservar ahora",
    panelTitle: "Solicitar tu estancia",
    panelDescription:
      "Comparte tus fechas y preferencias para ayudarte a encontrar la villa ideal.",
    completionLabel: "Enviar solicitud",
    summaryStatusLabel: "Solicitud lista para continuar",
  },
};
