import { PageIntro, PageSectionTitle } from "@/components/site-chrome";
import { VillaCard } from "@/components/villa-card";
import { villas } from "@/lib/site-data";

export default function VillasPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <PageIntro
        eyebrow="Colección de villas"
        title="Espacios con personalidad propia"
        copy="Cada villa propone una forma distinta de vivir el Pacífico: más íntima, más serena y con una escala pensada para descansar con estilo."
      />

      <section className="pt-14">
        <PageSectionTitle
          eyebrow="Todas las villas"
          title="Encuentra la estancia ideal"
        />
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ["Estancia boutique", "Cada espacio equilibra privacidad, calidez y una relación constante con el paisaje."],
            ["Diseño atemporal", "Interiores pensados para sentirse ligeros, cálidos y memorables."],
            ["Escapada curada", "Ideal para viajes en pareja, familia o descansos más largos frente al mar."],
          ].map(([title, copy]) => (
            <div key={title} className="premium-panel rounded-[1.6rem] px-5 py-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7A3A3A]">
                {title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6B5D53]">{copy}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {villas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </section>
    </main>
  );
}
