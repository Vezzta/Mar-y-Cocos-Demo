import type { Metadata } from "next";
import { BookingEventTracker } from "@/features/analytics";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Mar & Cocos Hotel/Villas",
  description: "Demo interactivo para un hotel boutique de villas en Manzanillo, Colima.",
  icons: {
    icon: [
      { url: `${assetBase}/favicon-monogram.svg`, type: "image/svg+xml" },
    ],
    shortcut: [`${assetBase}/favicon-monogram.svg`],
    apple: [
      { url: `${assetBase}/favicon-monogram.svg`, type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="page-shell">
          <BookingEventTracker />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
