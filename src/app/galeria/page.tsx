import { AssetPlanCard } from "@/components/media-ready";
import { PageIntro, PageSectionTitle } from "@/components/site-chrome";
import { gallery, mediaDeliveryGuide } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <PageIntro
        eyebrow="Galería"
        title="Momentos para imaginar la estancia"
        copy="Una colección visual pensada para transmitir calma, textura, luz y esa sensación de refugio que define a Mar & Cocos."
      />

      <section className="grid gap-4 pt-8 md:grid-cols-3">
        {mediaDeliveryGuide.map((item) => (
          <AssetPlanCard
            key={item.path}
            title={item.title}
            copy={item.copy}
            path="Próximamente con material de la marca"
          />
        ))}
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
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
