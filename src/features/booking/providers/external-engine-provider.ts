import type { BookingProvider } from "./types";

export const externalEngineProvider: BookingProvider = {
  id: "external-engine-placeholder",
  mode: "external_engine",
  providerName: "pending-provider-selection",
  presentation: {
    primaryCta: "Ver disponibilidad",
    stickyCta: "Reservar ahora",
    panelTitle: "Consulta disponibilidad",
    panelDescription:
      "Este flujo quedará conectado al motor de reservas elegido cuando se active la Opción B.",
    completionLabel: "Continuar a la reserva",
    summaryStatusLabel: "Disponibilidad lista para consultar",
  },
  capabilities: {
    supportsLeadCapture: false,
    supportsAvailabilityLookup: true,
    supportsInstantBooking: true,
    supportsVillaPrefill: true,
    supportsDatePrefill: true,
    supportsGuestPrefill: true,
  },
  actions: {
    primary: {
      kind: "open_panel",
      label: "Ver disponibilidad",
      eventName: "booking_primary_open_external_panel",
    },
    sticky: {
      kind: "navigate_external",
      label: "Reservar ahora",
      href: "#pending-booking-engine",
      target: "_blank",
      eventName: "booking_sticky_open_external_engine",
    },
    completion: {
      kind: "navigate_external",
      label: "Continuar a la reserva",
      href: "#pending-booking-engine",
      target: "_blank",
      eventName: "booking_completion_open_external_engine",
    },
  },
};
