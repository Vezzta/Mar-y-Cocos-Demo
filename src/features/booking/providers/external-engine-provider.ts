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
};
