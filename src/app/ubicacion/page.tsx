import { PageIntro, PageSectionTitle } from "@/components/site-chrome";

export default function LocationPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <PageIntro
        eyebrow="Ubicación"
        title="Un lugar que ayuda a vender la experiencia"
        copy="Esta página ya prepara el terreno para una narrativa más fuerte de destino. Cuando tengamos el punto exacto de Maps y materiales reales, se puede convertir en una mezcla de mapa, distancias, highlights del entorno y recomendaciones cercanas."
      />

      <section className="grid gap-8 pt-14 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[2rem] bg-[#7A3A3A] p-8 text-white">
          <PageSectionTitle eyebrow="Manzanillo, Colima" title="Entre el mar y la calma" />
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/80">
            <p>Playa La Audiencia</p>
            <p>Zona de vistas y atardeceres</p>
            <p>Acceso a experiencias costeras y gastronomía local</p>
          </div>
        </article>

        <article className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#E6D9C9] bg-[#E9DFCF] p-8">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, #9ED5DB 0 18%, transparent 19%), linear-gradient(135deg, #CFE8E8 0 38%, #F1E1CC 39% 100%)",
            }}
          />
          <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 900 420" fill="none">
            <path d="M0 300 C180 210 270 350 430 260 C600 160 700 210 900 110" stroke="#ffffff" strokeWidth="28" strokeLinecap="round" />
            <path d="M130 80 C250 140 330 80 460 150 C590 220 720 170 810 250" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#7A3A3A] text-white">
                📍
              </div>
              <div>
                <div className="font-display text-2xl">Mar & Cocos</div>
                <div className="text-sm text-[#6B5D53]">Hotel/Villas · Playa La Audiencia</div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
