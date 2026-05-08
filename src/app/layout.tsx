import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mar & Cocos Hotel/Villas",
  description: "Demo interactivo para un hotel boutique de villas en Manzanillo, Colima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
