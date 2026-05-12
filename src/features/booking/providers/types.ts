export type BookingMode = "lead_capture" | "external_engine" | "native_pms";

export type BookingProviderPresentation = {
  primaryCta: string;
  stickyCta: string;
  panelTitle: string;
  panelDescription: string;
  completionLabel: string;
  summaryStatusLabel: string;
};

export type BookingProvider = {
  id: string;
  mode: BookingMode;
  providerName: string;
  presentation: BookingProviderPresentation;
};
