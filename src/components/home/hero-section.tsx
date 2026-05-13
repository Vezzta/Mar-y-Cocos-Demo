import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { resolvedSiteMedia, siteMedia } from "@/content";
import { getBookingAction } from "@/features/booking";

export function HomeHeroSection({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  const primaryBookingAction = getBookingAction("primary");

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={resolvedSiteMedia.homeHero}
          alt={siteMedia.homeHero.alt}
          className="hero-image h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,24,19,0.72)_0%,rgba(39,24,19,0.34)_42%,rgba(39,24,19,0.18)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/55 via-transparent to-transparent" />
        <div className="absolute right-[14%] top-[8%] h-52 w-52 rounded-full bg-[#f1b47d]/20 blur-3xl md:h-80 md:w-80" />
      </div>

      <div className="relative mx-auto flex min-h-[820px] max-w-7xl flex-col justify-center px-5 pb-44 pt-20 md:px-8 md:pb-36">
        <div className="max-w-3xl text-white">
          <div className="animate-fade-up mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] backdrop-blur">
            Boutique hotel & villas · Manzanillo, Colima
          </div>
          <div className="animate-fade-up animation-delay-1 mb-4 h-6 w-16 text-white/90">
            <svg viewBox="0 0 180 32" className="h-full w-full" fill="none">
              <path
                d="M1 20 C28 20, 45 4, 76 13 C93 18, 103 21, 120 14 C135 8, 144 9, 154 19 C164 30, 176 22, 179 22"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1 className="animate-fade-up animation-delay-2 max-w-[10ch] font-display text-5xl leading-[0.94] md:text-7xl lg:text-[5.4rem]">
            Tu refugio frente a lo esencial.
          </h1>
          <p className="animate-fade-up animation-delay-3 mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-[1.32rem]">
            Villas privadas, hospitalidad cálida y la belleza natural del
            Pacífico mexicano en una experiencia más íntima y aspiracional.
          </p>
        </div>

        <div className="floating-card absolute right-8 top-[14%] hidden w-[320px] rounded-[2rem] border border-white/15 bg-[rgba(250,246,239,0.14)] p-5 text-white shadow-xl backdrop-blur-xl xl:block">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
            Escape signature
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight">
            Villas privadas entre mar, palmeras y luz dorada
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Ubicación</p>
              <p className="mt-1 font-semibold">Playa La Audiencia</p>
            </div>
            <div>
              <p className="text-white/60">Experiencia</p>
              <p className="mt-1 font-semibold">Boutique y serena</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm">
            <Link href="/villas" className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15">
              Explora todas las villas
            </Link>
            <Link
              href="/experiencias"
              className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15"
              data-analytics-event="navigation_hero_panel_click"
              data-analytics-category="navigation"
              data-analytics-label="Descubre experiencias"
            >
              Descubre experiencias
            </Link>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-4 absolute bottom-6 left-5 right-5 rounded-[2rem] border border-white/40 bg-[#FAF6EF]/95 p-4 shadow-2xl backdrop-blur md:left-8 md:right-8 lg:bottom-10">
          <div className="booking-grid grid gap-3 xl:grid-cols-[1fr_1fr_1fr_1.15fr_auto]">
            {[
              ["Check-in", "24 May 2025", "calendar"],
              ["Check-out", "27 May 2025", "calendar"],
              ["Huéspedes", "2 huéspedes", "users"],
              ["Tipo de alojamiento", "Todas las villas", "chevronDown"],
            ].map(([label, value, icon]) => (
              <div key={label} className="booking-cell rounded-2xl bg-white p-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                  {label}
                </div>
                <div className="mt-2 flex items-center justify-between text-[1.02rem] font-medium text-[#2D2420]">
                  <span>{value}</span>
                  <Icon
                    name={icon as IconName}
                    className="h-5 w-5 text-[#7A3A3A]/75"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={onOpenBooking}
              className="magnetic-cta booking-submit rounded-2xl bg-[#7A3A3A] px-8 py-4 text-sm font-black uppercase tracking-widest text-white xl:min-w-56"
              data-booking-event={primaryBookingAction.eventName}
              data-booking-kind={primaryBookingAction.kind}
            >
              {primaryBookingAction.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
