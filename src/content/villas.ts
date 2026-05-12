export type Villa = {
  id: string;
  slug: string;
  name: string;
  tag: string;
  rooms: string;
  bathrooms: string;
  guests: string;
  price: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
  assetPlan: {
    heroPhoto: string;
    galleryPhotos: string;
    cinematicVideo: string;
  };
};

export const villas: Villa[] = [
  {
    id: "mar",
    slug: "casa-mar",
    name: "Casa Mar",
    tag: "Frente al mar",
    rooms: "2 habitaciones",
    bathrooms: "2 baños",
    guests: "Hasta 4 huéspedes",
    price: "$4,800 MXN",
    description:
      "Vista directa al Pacífico, terraza privada y acceso inmediato a la playa para despertar con el sonido del mar.",
    longDescription:
      "Casa Mar está pensada para quienes quieren sentir el océano como parte de la estancia. La villa mezcla tonos cálidos, aperturas generosas y una relación constante con la costa para crear un refugio sereno y memorable.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: ["Vista al mar", "Terraza", "A/C", "Cocina"],
    highlights: ["Salida directa a playa", "Atardeceres abiertos", "Interior cálido"],
    assetPlan: {
      heroPhoto: "/media/villas/casa-mar/hero.jpg",
      galleryPhotos: "/media/villas/casa-mar/gallery-01.jpg",
      cinematicVideo: "/media/villas/casa-mar/intro.mp4",
    },
  },
  {
    id: "cocos",
    slug: "casa-cocos",
    name: "Casa Cocos",
    tag: "Vista al océano",
    rooms: "2 habitaciones",
    bathrooms: "2 baños",
    guests: "Hasta 4 huéspedes",
    price: "$5,200 MXN",
    description:
      "Alberca frente al mar, rincones para descansar y una terraza ideal para atardeceres inolvidables.",
    longDescription:
      "Casa Cocos es la villa insignia para una estancia boutique frente al Pacífico. Su composición privilegia la vista, la calma y la sensación de privacidad, con espacios que se sienten pensados para desconectar.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: ["Alberca", "WiFi", "A/C", "Vista"],
    highlights: ["Alberca privada", "Terraza amplia", "Escena sunset"],
    assetPlan: {
      heroPhoto: "/media/villas/casa-cocos/hero.jpg",
      galleryPhotos: "/media/villas/casa-cocos/gallery-01.jpg",
      cinematicVideo: "/media/villas/casa-cocos/intro.mp4",
    },
  },
  {
    id: "palma",
    slug: "casa-palma",
    name: "Casa Palma",
    tag: "Jardín tropical",
    rooms: "3 habitaciones",
    bathrooms: "3 baños",
    guests: "Hasta 6 huéspedes",
    price: "$6,200 MXN",
    description:
      "Espacios amplios rodeados de palmeras, jardín tropical, cocina equipada y alberca privada.",
    longDescription:
      "Casa Palma está pensada para estancias más largas o grupos pequeños que quieran amplitud y vegetación. La villa comunica descanso sofisticado, sin perder la cercanía con el mar y el clima tropical.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: ["Jardín", "Alberca", "Cocina", "Familias"],
    highlights: ["Layout generoso", "Vegetación madura", "Ideal para grupos"],
    assetPlan: {
      heroPhoto: "/media/villas/casa-palma/hero.jpg",
      galleryPhotos: "/media/villas/casa-palma/gallery-01.jpg",
      cinematicVideo: "/media/villas/casa-palma/intro.mp4",
    },
  },
  {
    id: "arena",
    slug: "casa-arena",
    name: "Casa Arena",
    tag: "Para parejas",
    rooms: "1 habitación",
    bathrooms: "1 baño",
    guests: "Hasta 2 huéspedes",
    price: "$3,800 MXN",
    description:
      "Privacidad total, interiores cálidos y una terraza íntima para escapadas románticas junto al mar.",
    longDescription:
      "Casa Arena privilegia la intimidad y la experiencia sensorial. Es la villa más enfocada a escapadas en pareja, con una atmósfera suave, materiales cálidos y escala más contenida.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    ],
    amenities: ["Privada", "Terraza", "A/C", "Romántica"],
    highlights: ["Escapada íntima", "Escala boutique", "Privacidad total"],
    assetPlan: {
      heroPhoto: "/media/villas/casa-arena/hero.jpg",
      galleryPhotos: "/media/villas/casa-arena/gallery-01.jpg",
      cinematicVideo: "/media/villas/casa-arena/intro.mp4",
    },
  },
];

export function getVillaBySlug(slug: string) {
  return villas.find((villa) => villa.slug === slug) ?? null;
}
