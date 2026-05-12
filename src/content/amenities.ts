import type { IconName } from "@/components/icons";

export const amenityList: readonly [IconName, string][] = [
  ["wave", "Alberca infinita"],
  ["location", "Acceso a playa"],
  ["wifi", "WiFi Starlink"],
  ["air", "Aire acondicionado"],
  ["cutlery", "Cocina equipada"],
  ["coffee", "Desayuno"],
  ["sparkle", "Atención personalizada"],
] as const;
