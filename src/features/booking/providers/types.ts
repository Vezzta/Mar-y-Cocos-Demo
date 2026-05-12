export type BookingMode = "lead_capture" | "external_engine" | "native_pms";

export type BookingActionKey = "primary" | "sticky" | "completion";

export type BookingActionKind =
  | "open_panel"
  | "navigate_internal"
  | "navigate_external"
  | "submit_lead";

export type BookingAction = {
  kind: BookingActionKind;
  label: string;
  href?: string;
  target?: "_self" | "_blank";
  eventName: string;
};

export type BookingCapabilities = {
  supportsLeadCapture: boolean;
  supportsAvailabilityLookup: boolean;
  supportsInstantBooking: boolean;
  supportsVillaPrefill: boolean;
  supportsDatePrefill: boolean;
  supportsGuestPrefill: boolean;
};

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
  capabilities: BookingCapabilities;
  actions: Record<BookingActionKey, BookingAction>;
};
