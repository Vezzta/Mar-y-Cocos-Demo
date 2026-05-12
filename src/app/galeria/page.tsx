import { gallery } from "@/content";
import { AssetPlanCard } from "@/components/media-ready";
import { PageIntro, PageSectionTitle } from "@/components/site-chrome";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <PageIntro
        eyebrow="Galería"
        title="Momentos para imaginar la estancia"
        copy="Una colección visual pensada para transmitir calma, textura, luz y esa sensación de refugio que define a Mar & Cocos."
      />

      <section className="grid gap-4 pt-8 md:grid-cols-3">
        {[
          {
            title: "Hero costero",
            copy: "Una apertura amplia y luminosa que transmita el carácter íntimo del refugio frente al mar.",
          },
          {
            title: "Ritmo editorial",
            copy: "Imágenes que mezclen arquitectura, detalle, paisaje y atmósfera para sostener una narrativa más aspiracional.",
          },
          {
            title: "Lifestyle boutique",
            copy: "Momentos de descanso, sobremesa, luz dorada y conexión con el Pacífico como parte de la experiencia.",
          },
        ].map((item) => (
          <AssetPlanCard
            key={item.title}
            title={item.title}
            copy={item.copy}
          />
        ))}
      </section>

      <section className="pt-10">
        <PageSectionTitle eyebrow="Dirección visual" title="Piezas clave de la experiencia" />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Llegada y primera impresión",
              copy: "La imagen principal debe sentirse cálida, abierta y memorable desde el primer scroll.",
            },
            {
              title: "Contexto y entorno",
              copy: "La costa, la vegetación y los atardeceres deben ayudar a vender la estancia como destino.",
            },
          ].map((asset) => (
            <AssetPlanCard
              key={asset.title}
              title={asset.title}
              copy={asset.copy}
            />
          ))}
        </div>
      </section>

      <section className="pt-14">
        <PageSectionTitle eyebrow="Colección visual" title="Momentos que inspiran" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={image} className={index % 5 === 0 ? "xl:col-span-2 xl:row-span-2" : ""}>
              <img
                src={image}
                alt={`Galería ${index + 1}`}
                className="h-full min-h-[220px] w-full rounded-[1.6rem] object-cover"
                data-analytics-event="gallery_image_impression"
                data-analytics-category="media"
                data-analytics-label={`Galería ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
