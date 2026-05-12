import type { IconName } from "@/components/icons";

export type Experience = {
  title: string;
  icon: IconName;
  copy: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    title: "Paseo en velero",
    icon: "sail",
    copy: "Navega la costa del Pacífico y descubre bahías escondidas al ritmo de Manzanillo.",
    image:
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Snorkel & naturaleza",
    icon: "fish",
    copy: "Aguas cristalinas, vida marina y una experiencia perfecta para conectar con la naturaleza.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Atardeceres & cenas",
    icon: "sunset",
    copy: "Cenas frente al mar, luz dorada y el ambiente íntimo que hace memorable cada noche.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
];
