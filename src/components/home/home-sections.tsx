import Link from "next/link";
import {
  amenityList,
  experiences,
  faqs,
  gallery,
  resolvedSiteMedia,
  siteMedia,
  villas,
} from "@/content";
import { PageSectionTitle } from "@/components/site-chrome";
import { VillaCard } from "@/components/villa-card";

export function HomeFeatureStrip() {
  return (
    <section className="border-b border-[#E6D9C9] bg-[linear-gradient(180deg,#fffdf9,#f8f0e6)]">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:grid-cols-4 md:px-8">
        {[
          ["Frente al mar", "Acceso directo a la playa"],
          ["Villas privadas", "Diseñadas para tu descanso"],
          ["Hospitalidad cálida", "Servicio personalizado"],
          ["Experiencias locales", "Conexión auténtica"],
        ].map(([title, copy]) => (
          <div key={title} className="feature-strip-item animate-fade-up">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-[#E6D9C9] bg-white text-[#7A3A3A]">
              ✦
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7A3A3A]">
                {title}
              </p>
              <p className="mt-1 text-sm text-[#6B5D53]">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeVillasSection({
  onVillaPreview,
}: {
  onVillaPreview: (villaId: string) => void;
}) {
  return (
    <section id="villas" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <PageSectionTitle
        eyebrow="Hospedaje boutique"
        title="Espacios para reconectar"
        cta="Ver colección completa"
        href="/villas"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {villas.map((villa) => (
          <div key={villa.id} onDoubleClick={() => onVillaPreview(villa.id)}>
            <VillaCard villa={villa} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeEditorialGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-4 md:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.18fr_0.9fr_0.9fr]">
        <article className="surface-hover premium-panel rounded-[2rem] p-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7A3A3A]">
                Nuestra villa protagonista
              </p>
              <h2 className="mt-2 font-display text-4xl text-[#2D2420]">
                La estancia que define la experiencia
              </h2>
            </div>
            <Link
              href="/villas/casa-cocos"
              className="text-sm font-black uppercase tracking-[0.12em] text-[#7A3A3A]"
              data-analytics-event="navigation_editorial_click"
              data-analytics-category="navigation"
              data-analytics-label="Ver villa protagonista"
            >
              Ver villa →
            </Link>
          </div>
          <div className="image-sheen overflow-hidden rounded-[1.8rem]">
            <img
              src={villas[1].image}
              alt={villas[1].name}
              className="media-zoom h-[360px] w-full object-cover"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {villas[1].highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[#E6D9C9] bg-[#FAF6EF] px-4 py-2 text-sm font-semibold text-[#6B5D53]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </article>

        <article className="surface-hover premium-panel rounded-[2rem] p-6">
          <PageSectionTitle eyebrow="Amenidades" title="Comodidad que se siente" />
          <div className="space-y-3">
            {amenityList.slice(0, 6).map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-[#EEE2D4] bg-[#FFFCF8] px-4 py-4"
              >
                <span className="text-xl text-[#7A3A3A]">{icon}</span>
                <span className="text-sm font-medium text-[#5B4D43]">{label}</span>
              </div>
            ))}
          </div>
          <Link
            href="/ubicacion"
            className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.12em] text-[#7A3A3A]"
            data-analytics-event="navigation_editorial_click"
            data-analytics-category="navigation"
            data-analytics-label="Ver más detalles"
          >
            Ver más detalles →
          </Link>
        </article>

        <article className="surface-hover premium-panel rounded-[2rem] p-6">
          <PageSectionTitle eyebrow="Experiencias" title="Vive lo auténtico" />
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.title} className="surface-hover flex gap-4 rounded-2xl bg-[#FFFCF8] p-3">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-20 w-20 rounded-2xl object-cover transition duration-500 group-hover:scale-105"
                />
                <div>
                  <h3 className="font-display text-2xl text-[#2D2420]">{exp.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6B5D53]">{exp.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/experiencias"
            className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.12em] text-[#7A3A3A]"
            data-analytics-event="navigation_editorial_click"
            data-analytics-category="navigation"
            data-analytics-label="Ver todas las experiencias"
          >
            Ver todas las experiencias →
          </Link>
        </article>
      </div>
    </section>
  );
}

export function HomeAmenitiesSection() {
  return (
    <section id="amenidades" className="scroll-mt-28 bg-[#E9DFCF]/55 py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <PageSectionTitle
          eyebrow="Todo para descansar"
          title="Amenidades"
          cta="Ver ubicaciones y entorno"
          href="/ubicacion"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {amenityList.map(([icon, label]) => (
            <div
              key={label}
              className="rounded-[1.5rem] bg-[#FAF6EF] p-5 text-center shadow-sm"
            >
              <div className="mx-auto text-3xl text-[#7A3A3A]">{icon}</div>
              <div className="mt-3 text-sm font-bold text-[#5B4D43]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeGallerySection({
  galleryFocus,
  onSelectImage,
}: {
  galleryFocus: string;
  onSelectImage: (image: string) => void;
}) {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <PageSectionTitle
        eyebrow="Momentos Mar & Cocos"
        title="Momentos que inspiran"
        cta="Ver galería completa"
        href="/galeria"
      />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="h-[430px] overflow-hidden rounded-[2rem]">
          <img src={galleryFocus} alt="Galería destacada" className="h-full w-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {gallery.slice(1, 5).map((image) => (
            <button
              key={image}
              onClick={() => onSelectImage(image)}
              className="thumb-hover h-32 overflow-hidden rounded-[1.5rem] ring-[#7A3A3A] md:h-[132px]"
              data-analytics-event="gallery_thumbnail_click"
              data-analytics-category="media"
              data-analytics-label="Galería home"
            >
              <img src={image} alt="Galería" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeExperiencesSection() {
  return (
    <section id="experiencias" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <PageSectionTitle
          eyebrow="Qué hacer cerca"
          title="Experiencias en Manzanillo"
          cta="Ver página de experiencias"
          href="/experiencias"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="group surface-hover overflow-hidden rounded-[2rem] border border-[#E6D9C9] bg-[#FAF6EF] shadow-sm"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#E9DFCF] text-2xl text-[#7A3A3A]">
                  {exp.icon}
                </div>
                <h3 className="font-display text-3xl">{exp.title}</h3>
                <p className="mt-3 leading-7 text-[#6B5D53]">{exp.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeLocationAndTestimonialSection() {
  return (
    <>
      <section
        id="ubicacion"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div className="rounded-[2rem] bg-[#7A3A3A] p-8 text-white">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/65">
            Manzanillo, Colima
          </p>
          <h2 className="mt-3 font-display text-5xl">Entre el mar y la calma</h2>
          <p className="mt-5 leading-8 text-white/80">
            Una ubicación pensada para desconectar: playa, naturaleza, atardeceres y
            fácil acceso a restaurantes, paseos y experiencias locales.
          </p>
          <Link
            href="/ubicacion"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF6EF] px-6 py-3 text-sm font-black uppercase tracking-widest text-[#7A3A3A]"
            data-analytics-event="navigation_location_cta_click"
            data-analytics-category="navigation"
            data-analytics-label="Explorar ubicación"
          >
            Explorar ubicación →
          </Link>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#E9DFCF] p-8">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-[#E6D9C9] bg-white p-8 shadow-sm">
            <PageSectionTitle eyebrow="Ubicación" title="Un entorno que vende la estancia" />
            <p className="max-w-[32ch] text-base leading-8 text-[#6B5D53]">
              Frente al mar y a minutos de restaurantes, paseos y experiencias
              costeras, Mar & Cocos puede posicionarse como una escapada más
              íntima, elegante y memorable.
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.7rem]">
              <img
                src={resolvedSiteMedia.locationEditorial}
                alt={siteMedia.locationEditorial.alt}
                className="h-[280px] w-full object-cover"
              />
            </div>
            <div className="mt-6 grid gap-3 text-sm text-[#6B5D53]">
              <div>A 5 min de playa y zonas de vista</div>
              <div>Base ideal para escapadas en pareja o familia</div>
              <div>Atardeceres y ambiente boutique como diferenciador</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E6D9C9] bg-white p-8 shadow-sm">
            <PageSectionTitle eyebrow="Testimonios" title="Lo que dicen nuestros huéspedes" />
            <div className="quote-card rounded-[2rem] bg-[#FAF6EF] px-8 py-10">
              <div className="text-4xl text-[#C58B7A]">“</div>
              <p className="mt-2 font-display text-[2rem] leading-tight text-[#2D2420] md:text-[2.3rem]">
                Mar & Cocos es un paraíso. La atención, la vista y cada detalle
                hicieron de nuestra estancia algo inolvidable.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#6B5D53]">
                Ana & Luis, CDMX
              </p>
              <div className="mt-6 flex gap-2 text-[#B67D6E]">
                <span>●</span>
                <span>●</span>
                <span>●</span>
                <span>●</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function HomeFaqSection({
  openIndex,
  onToggle,
}: {
  openIndex: number;
  onToggle: (index: number) => void;
}) {
  return (
    <section className="bg-[#E9DFCF]/45 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div id="faq" className="rounded-[2rem] bg-white p-8 shadow-sm">
          <PageSectionTitle eyebrow="Antes de reservar" title="Preguntas frecuentes" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {faqs.map((item, index) => (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-[#E6D9C9]">
                <button
                  onClick={() => onToggle(index)}
                  className="flex w-full items-center justify-between gap-4 bg-[#FAF6EF] p-4 text-left font-bold"
                >
                  {item.q}
                  <span className={`transition ${openIndex === index ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {openIndex === index ? (
                  <p className="p-4 leading-7 text-[#6B5D53]">{item.a}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeCtaSection({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  return (
    <section className="bg-[linear-gradient(180deg,#8a4a4a,#6E3030)] py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/65">
            ¿Listo para descansar?
          </p>
          <h2 className="mt-3 font-display text-5xl">Reserva tu estancia</h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Dejemos esta base lista para recibir fotografía y video profesional
            sin perder fuerza comercial.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onOpenBooking}
            className="magnetic-cta rounded-xl bg-[#FAF6EF] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#7A3A3A]"
            data-analytics-event="navigation_footer_cta_click"
            data-analytics-category="navigation"
            data-analytics-label="Reservar ahora"
          >
            Reservar ahora
          </button>
          <Link
            href="/villas"
            className="rounded-xl border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            data-analytics-event="navigation_footer_cta_click"
            data-analytics-category="navigation"
            data-analytics-label="Ver villas"
          >
            Ver villas
          </Link>
        </div>
      </div>
    </section>
  );
}
