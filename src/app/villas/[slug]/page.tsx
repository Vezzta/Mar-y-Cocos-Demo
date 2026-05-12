import { VideoPlaceholder } from "@/components/media-ready";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVillaBySlug, villas } from "@/lib/site-data";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return villas.map((villa) => ({ slug: villa.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const villa = getVillaBySlug(params.slug);

  if (!villa) {
    return {
      title: "Villa no encontrada | Mar & Cocos",
    };
  }

  return {
    title: `${villa.name} | Mar & Cocos`,
    description: villa.description,
  };
}

export default function VillaDetailPage({ params }: Props) {
  const villa = getVillaBySlug(params.slug);

  if (!villa) {
    notFound();
  }

  return (
    <main className="villa-page-enter">
      <section className="relative overflow-hidden">
        <img
          src={villa.image}
          alt={villa.name}
          className="h-[520px] w-full object-cover md:h-[620px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/60 via-transparent to-transparent" />
        <div className="absolute right-[10%] top-[10%] hidden h-56 w-56 rounded-full bg-[#f4b27b]/20 blur-3xl lg:block" />
        <div className="absolute bottom-10 left-5 right-5 mx-auto max-w-7xl md:left-8 md:right-8">
          <div className="max-w-2xl text-white">
            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] backdrop-blur">
              {villa.tag}
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl">{villa.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">
              {villa.longDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E6D9C9] bg-[linear-gradient(180deg,#fffdf9,#f8f0e6)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:grid-cols-4 md:px-8">
          {[
            [villa.rooms, "Distribución privada"],
            [villa.bathrooms, "Comodidad funcional"],
            [villa.guests, "Capacidad ideal"],
            [villa.price, "Tarifa desde"],
          ].map(([title, copy]) => (
            <div key={copy} className="feature-strip-item">
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

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="premium-panel rounded-[2rem] p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7A3A3A]">
            Sobre la villa
          </p>
          <h2 className="mt-3 font-display text-5xl text-[#2D2420]">
            Una estancia pensada para quedarse
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6B5D53]">
            {villa.longDescription}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {villa.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-3xl bg-[#FAF6EF] px-5 py-5 text-sm font-bold text-[#7A3A3A]"
              >
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <VideoPlaceholder
              eyebrow="Próximamente"
              title="Una mirada más cinematográfica a la experiencia"
              copy="Este espacio está pensado para mostrar la atmósfera de la villa con movimiento, luz natural y una narrativa más sensorial."
              fileHint="Video editorial de la villa"
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {villa.gallery.map((image, index) => (
              <div
                key={image}
                className={`image-sheen overflow-hidden rounded-[1.6rem] ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${villa.name} ${index + 1}`}
                  className="media-zoom h-full min-h-[220px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <div className="premium-panel rounded-[2rem] p-7">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-[#7A3A3A]">
              Desde
            </div>
            <div className="mt-2 text-4xl font-black text-[#2D2420]">{villa.price}</div>
            <div className="mt-1 text-sm text-[#6B5D53]">por noche</div>

            <div className="mt-6 space-y-3 text-sm text-[#6B5D53]">
              <div>🛏️ {villa.rooms}</div>
              <div>🛁 {villa.bathrooms}</div>
              <div>👥 {villa.guests}</div>
            </div>

            <Link
              href="/villas"
              className="magnetic-cta mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#7A3A3A] px-5 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#6E3030]"
            >
              Ver disponibilidad
            </Link>
          </div>

          <div className="premium-panel rounded-[2rem] p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7A3A3A]">
              Amenidades
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {villa.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="rounded-2xl bg-[#FAF6EF] p-4 text-center text-sm font-bold text-[#7A3A3A]"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E6D9C9] bg-[linear-gradient(180deg,#8a4a4a,#6E3030)] p-7 text-white shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/65">
              Experiencia boutique
            </p>
            <h3 className="mt-3 font-display text-4xl">
              Una villa pensada para quedarse en la memoria
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Privacidad, calma y un lenguaje visual más sereno hacen que cada
              detalle sume a una estancia más personal y más memorable.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/85">
              {villa.highlights.map((highlight) => (
                <div key={highlight} className="rounded-xl bg-white/10 px-4 py-3">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
