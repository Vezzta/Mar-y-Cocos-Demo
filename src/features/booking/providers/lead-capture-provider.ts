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
  capabilities: {
    supportsLeadCapture: true,
    supportsAvailabilityLookup: false,
    supportsInstantBooking: false,
    supportsVillaPrefill: true,
    supportsDatePrefill: true,
    supportsGuestPrefill: true,
  },
  actions: {
    primary: {
      kind: "open_panel",
      label: "Ver disponibilidad",
      eventName: "booking_primary_open_panel",
    },
    sticky: {
      kind: "navigate_internal",
      label: "Reservar ahora",
      href: "/villas",
      target: "_self",
      eventName: "booking_sticky_view_villas",
    },
    completion: {
      kind: "submit_lead",
      label: "Enviar solicitud",
      eventName: "booking_completion_submit_lead",
    },
  },
};
