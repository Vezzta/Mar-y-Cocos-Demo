import { experiences } from "@/content";
import { PageIntro, PageSectionTitle } from "@/components/site-chrome";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <PageIntro
        eyebrow="Experiencias"
        title="El viaje empieza más allá de la habitación"
        copy="Una estancia memorable también se construye con mar, gastronomía, aventura suave y momentos que conectan con el ritmo de Manzanillo."
      />

      <section className="pt-14">
        <PageSectionTitle eyebrow="Qué hacer cerca" title="Momentos para recordar" />
        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="overflow-hidden rounded-[2rem] border border-[#E6D9C9] bg-white shadow-sm"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#E9DFCF] text-2xl text-[#7A3A3A]">
                  {experience.icon}
                </div>
                <h2 className="font-display text-3xl text-[#2D2420]">
                  {experience.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#6B5D53]">
                  {experience.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
