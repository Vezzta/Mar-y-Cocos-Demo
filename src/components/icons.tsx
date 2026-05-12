import type { ReactNode } from "react";

export type IconName =
  | "wave"
  | "location"
  | "wifi"
  | "air"
  | "cutlery"
  | "coffee"
  | "sparkle"
  | "sail"
  | "fish"
  | "sunset"
  | "calendar"
  | "users"
  | "chevronDown"
  | "check"
  | "play"
  | "phone"
  | "mail"
  | "bed"
  | "bath"
  | "villa"
  | "heartShield";

type IconProps = {
  name: IconName;
  className?: string;
};

function Stroke({
  children,
  className = "h-5 w-5",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function Icon({ name, className }: IconProps) {
  switch (name) {
    case "wave":
      return (
        <Stroke className={className}>
          <path d="M3 15c1.4 0 1.4-2 2.8-2s1.4 2 2.8 2 1.4-2 2.8-2 1.4 2 2.8 2 1.4-2 2.8-2 1.4 2 2.8 2" />
          <path d="M3 10c1.4 0 1.4-2 2.8-2s1.4 2 2.8 2 1.4-2 2.8-2 1.4 2 2.8 2 1.4-2 2.8-2 1.4 2 2.8 2" />
        </Stroke>
      );
    case "location":
      return (
        <Stroke className={className}>
          <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </Stroke>
      );
    case "wifi":
      return (
        <Stroke className={className}>
          <path d="M4.5 9a12 12 0 0 1 15 0" />
          <path d="M7.5 12.5a7.6 7.6 0 0 1 9 0" />
          <path d="M10.5 16a3.2 3.2 0 0 1 3 0" />
          <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
        </Stroke>
      );
    case "air":
      return (
        <Stroke className={className}>
          <path d="M4 9h10a3 3 0 1 0 0-6" />
          <path d="M4 15h14a2.5 2.5 0 1 1 0 5" />
          <path d="M6 12h9" />
        </Stroke>
      );
    case "cutlery":
      return (
        <Stroke className={className}>
          <path d="M5 3v8" />
          <path d="M8 3v8" />
          <path d="M5 7h3" />
          <path d="M6.5 11v10" />
          <path d="M15 3c0 4 0 6-3 8v10" />
          <path d="M15 3v18" />
        </Stroke>
      );
    case "coffee":
      return (
        <Stroke className={className}>
          <path d="M5 10h9a0 0 0 0 1 0 0v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-3a0 0 0 0 1 0 0Z" />
          <path d="M14 11h1.5a2.5 2.5 0 0 1 0 5H14" />
          <path d="M7 21h8" />
          <path d="M8 4c0 1-1 1.5-1 2.5S8 8 8 9" />
          <path d="M11 4c0 1-1 1.5-1 2.5S11 8 11 9" />
        </Stroke>
      );
    case "sparkle":
      return (
        <Stroke className={className}>
          <path d="m12 3 1.1 3.4L16.5 7.5l-3.4 1.1L12 12l-1.1-3.4L7.5 7.5l3.4-1.1L12 3Z" />
          <path d="m18.5 14 .6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9Z" />
          <path d="m5.5 15 .8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8.8-2.4Z" />
        </Stroke>
      );
    case "sail":
      return (
        <Stroke className={className}>
          <path d="M12 4v13" />
          <path d="m12 5 5 7h-5" />
          <path d="m12 7-4 5h4" />
          <path d="M4 20h16" />
          <path d="M7 20a5 5 0 0 1 10 0" />
        </Stroke>
      );
    case "fish":
      return (
        <Stroke className={className}>
          <path d="M4 12s3-5 8-5c4.2 0 6.6 2.4 8 5-1.4 2.6-3.8 5-8 5-5 0-8-5-8-5Z" />
          <path d="m4 12-2-2v4l2-2Z" />
          <circle cx="14.5" cy="10.5" r=".8" fill="currentColor" stroke="none" />
        </Stroke>
      );
    case "sunset":
      return (
        <Stroke className={className}>
          <path d="M4 17h16" />
          <path d="M6 20h12" />
          <path d="M7 14a5 5 0 0 1 10 0" />
          <path d="M12 3v3" />
          <path d="m5.6 7.6 2.1 2.1" />
          <path d="m18.4 7.6-2.1 2.1" />
        </Stroke>
      );
    case "calendar":
      return (
        <Stroke className={className}>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
          <path d="M7.5 3.5v3" />
          <path d="M16.5 3.5v3" />
          <path d="M3.5 9.5h17" />
        </Stroke>
      );
    case "users":
      return (
        <Stroke className={className}>
          <circle cx="9" cy="9" r="2.5" />
          <circle cx="16.5" cy="10.5" r="2" />
          <path d="M4.5 18a4.5 4.5 0 0 1 9 0" />
          <path d="M14 18a3.5 3.5 0 0 1 6 0" />
        </Stroke>
      );
    case "chevronDown":
      return (
        <Stroke className={className}>
          <path d="m7 10 5 5 5-5" />
        </Stroke>
      );
    case "check":
      return (
        <Stroke className={className}>
          <path d="m5 12 4 4 10-10" />
        </Stroke>
      );
    case "play":
      return (
        <Stroke className={className}>
          <path d="M8 6.5v11l9-5.5-9-5.5Z" />
        </Stroke>
      );
    case "phone":
      return (
        <Stroke className={className}>
          <path d="M6.5 4.5h3l1.2 3.2-1.8 1.8a14 14 0 0 0 5.6 5.6l1.8-1.8 3.2 1.2v3a1.5 1.5 0 0 1-1.7 1.5C9.7 18.2 5.8 14.3 5 6.2A1.5 1.5 0 0 1 6.5 4.5Z" />
        </Stroke>
      );
    case "mail":
      return (
        <Stroke className={className}>
          <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
          <path d="m5.5 8 6.5 5 6.5-5" />
        </Stroke>
      );
    case "bed":
      return (
        <Stroke className={className}>
          <path d="M4 18v-7h16v7" />
          <path d="M6.5 11V8.5A2.5 2.5 0 0 1 9 6h2.5A2.5 2.5 0 0 1 14 8.5V11" />
          <path d="M4 14h16" />
        </Stroke>
      );
    case "bath":
      return (
        <Stroke className={className}>
          <path d="M5 12h14v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-2Z" />
          <path d="M7 12V8.5A2.5 2.5 0 0 1 9.5 6H12" />
          <path d="M12 6a2 2 0 1 1 2 2" />
        </Stroke>
      );
    case "villa":
      return (
        <Stroke className={className}>
          <path d="M4 19V9.5L12 4l8 5.5V19" />
          <path d="M9 19v-5h6v5" />
        </Stroke>
      );
    case "heartShield":
      return (
        <Stroke className={className}>
          <path d="M12 3.5 18 6v5.8c0 4.2-2.5 7-6 8.7-3.5-1.7-6-4.5-6-8.7V6l6-2.5Z" />
          <path d="M12 14.7s-2.9-1.7-2.9-3.8a1.8 1.8 0 0 1 3-1.4 1.8 1.8 0 0 1 3 1.4c0 2.1-3.1 3.8-3.1 3.8Z" />
        </Stroke>
      );
    default:
      return null;
  }
}
