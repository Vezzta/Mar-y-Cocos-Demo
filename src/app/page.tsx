"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { PageSectionTitle } from "@/components/site-chrome";
import { VillaCard } from "@/components/villa-card";
import { activeBookingProvider } from "@/features/booking";
import {
  amenityList,
  experiences,
  faqs,
  gallery,
  sectionNav,
  villas,
  type Villa,
} from "@/lib/site-data";

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MiniIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#E9DFCF] text-xl text-[#7A3A3A]">
      {children}
    </span>
  );
}

function BookingPanel({
  selectedVilla,
  onClose,
}: {
  selectedVilla: Villa | null;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [villa, setVilla] = useState(selectedVilla?.name || "Casa Cocos");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="ml-auto flex h-full w-full max-w-xl flex-col overflow-hidden rounded-[2rem] bg-[#FAF6EF] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#7A3A3A] px-6 py-5 text-white">
          <div className="font-display text-3xl">Reserva demo</div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-xl hover:bg-white/20"
            aria-label="Cerrar reservación"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#7A3A3A]">
            {[1, 2, 3].map((n) => (
              <React.Fragment key={n}>
                <button
                  onClick={() => setStep(n)}
                  className={`grid h-8 w-8 place-items-center rounded-full ${
                    step >= n ? "bg-[#7A3A3A] text-white" : "bg-[#E9DFCF] text-[#7A3A3A]"
                  }`}
                >
                  {n}
                </button>
                {n < 3 && (
                  <div
                    className={`h-px flex-1 ${
                      step > n ? "bg-[#7A3A3A]" : "bg-[#E9DFCF]"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <h2 className="font-display text-4xl text-[#2D2420]">
            {activeBookingProvider.presentation.panelTitle}
          </h2>
          <p className="mt-2 text-sm text-[#6B5D53]">
            {activeBookingProvider.presentation.panelDescription}
          </p>

          {step === 1 && (
            <div className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Check-in", "24 May 2025"],
                  ["Check-out", "27 May 2025"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[#E1D6C8] bg-white p-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#7A3A3A]">
                      {label}
                    </span>
                    <div className="mt-2 flex items-center justify-between text-[#2D2420]">
                      <span className="font-semibold">{value}</span>
                      <span>📅</span>
                    </div>
                  </div>
                ))}
              </div>
              <label className="block rounded-2xl border border-[#E1D6C8] bg-white p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A3A3A]">
                  Huéspedes
                </span>
                <select className="mt-2 w-full bg-transparent font-semibold outline-none">
                  <option>2 huéspedes</option>
                  <option>4 huéspedes</option>
                  <option>6 huéspedes</option>
                </select>
              </label>
              <label className="block rounded-2xl border border-[#E1D6C8] bg-white p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A3A3A]">
                  Villa
                </span>
                <select
                  value={villa}
                  onChange={(event) => setVilla(event.target.value)}
                  className="mt-2 w-full bg-transparent font-semibold outline-none"
                >
                  {villas.map((item) => (
                    <option key={item.id}>{item.name}</option>
                  ))}
                </select>
              </label>
              <button
                onClick={() => setStep(2)}
                className="w-full rounded-2xl bg-[#7A3A3A] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#6E3030]"
              >
                {activeBookingProvider.presentation.primaryCta}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="mt-8 space-y-4">
              {villas.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setVilla(item.name);
                    setStep(3);
                  }}
                  className={`flex w-full gap-4 rounded-3xl border p-3 text-left transition hover:-translate-y-1 hover:shadow-xl ${
                    villa === item.name
                      ? "border-[#7A3A3A] bg-white"
                      : "border-[#E1D6C8] bg-white/70"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-28 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#7A3A3A]">
                      {item.tag}
                    </div>
                    <div className="mt-1 font-display text-2xl text-[#2D2420]">
                      {item.name}
                    </div>
                    <div className="mt-1 text-sm text-[#6B5D53]">
                      {item.rooms} · {item.guests}
                    </div>
                    <div className="mt-2 text-sm font-black text-[#7A3A3A]">
                      Desde {item.price} / noche
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <MiniIcon>✓</MiniIcon>
                <div>
                  <h3 className="font-display text-3xl text-[#2D2420]">
                    Resumen de reserva
                  </h3>
                  <p className="mt-1 text-sm text-[#6B5D53]">
                    {activeBookingProvider.presentation.summaryStatusLabel}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-[#EFE4D5] pb-3">
                  <span>Villa</span>
                  <strong>{villa}</strong>
                </div>
                <div className="flex justify-between border-b border-[#EFE4D5] pb-3">
                  <span>Fechas</span>
                  <strong>24–27 May 2025</strong>
                </div>
                <div className="flex justify-between border-b border-[#EFE4D5] pb-3">
                  <span>Huéspedes</span>
                  <strong>2 huéspedes</strong>
                </div>
                <div className="flex justify-between pb-3">
                  <span>Pago</span>
                  <strong>Continuación segura</strong>
                </div>
              </div>
              <button className="mt-6 w-full rounded-2xl bg-[#7A3A3A] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#6E3030]">
                {activeBookingProvider.presentation.completionLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function VillaModal({
  villa,
  onClose,
  onReserve,
}: {
  villa: Villa | null;
  onClose: () => void;
  onReserve: (villa: Villa) => void;
}) {
  if (!villa) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#FAF6EF] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-72 overflow-hidden">
          <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-2 text-xl text-[#7A3A3A] hover:bg-white"
            aria-label="Cerrar detalle de villa"
          >
            ×
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur">
              {villa.tag}
            </div>
            <h3 className="font-display text-5xl">{villa.name}</h3>
          </div>
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <p className="text-lg leading-8 text-[#5B4D43]">{villa.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {villa.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="rounded-2xl bg-white p-4 text-center text-sm font-bold text-[#7A3A3A] shadow-sm"
                >
                  {amenity}
                </div>
              ))}
            </div>
            <Link
              href={`/villas/${villa.slug}`}
              className="mt-6 inline-flex rounded-2xl border border-[#E1D6C8] px-5 py-3 text-sm font-black uppercase tracking-widest text-[#7A3A3A]"
            >
              Ver página completa
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="text-xs font-black uppercase tracking-widest text-[#7A3A3A]">
              Desde
            </div>
            <div className="mt-1 text-3xl font-black text-[#2D2420]">{villa.price}</div>
            <div className="text-sm text-[#6B5D53]">por noche</div>
            <div className="mt-5 space-y-3 text-sm text-[#6B5D53]">
              <div>🛏️ {villa.rooms}</div>
              <div>🛁 {villa.bathrooms}</div>
              <div>👥 {villa.guests}</div>
            </div>
            <button
              onClick={() => onReserve(villa)}
              className="mt-6 w-full rounded-2xl bg-[#7A3A3A] px-5 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#6E3030]"
            >
              Reservar esta villa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [galleryFocus, setGalleryFocus] = useState(gallery[0]);

  const selectedVillaForBooking = useMemo(() => selectedVilla, [selectedVilla]);

  return (
    <main>
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=85"
            alt="Villa tropical frente al mar"
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
            <div className="animate-fade-up animation-delay-4 mt-8 flex flex-wrap gap-3">
              <Link
                href="/villas"
                className="magnetic-cta rounded-full bg-[#FAF6EF] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#7A3A3A] shadow-xl"
              >
                Explora las villas
              </Link>
              <Link
                href="/galeria"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Ver galería
              </Link>
            </div>
          </div>

          <div className="floating-card absolute right-8 top-10 hidden w-[320px] rounded-[2rem] border border-white/15 bg-[rgba(250,246,239,0.14)] p-5 text-white shadow-xl backdrop-blur-xl xl:block">
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
              <Link href="/experiencias" className="rounded-2xl bg-white/10 px-4 py-3 transition duration-300 hover:bg-white/15">
                Descubre experiencias
              </Link>
            </div>
          </div>

          <div className="animate-fade-up animation-delay-4 absolute bottom-6 left-5 right-5 rounded-[2rem] border border-white/40 bg-[#FAF6EF]/95 p-4 shadow-2xl backdrop-blur md:left-8 md:right-8 lg:bottom-10">
            <div className="booking-grid grid gap-3 xl:grid-cols-[1fr_1fr_1fr_1.15fr_auto]">
              {[
                ["Check-in", "24 May 2025", "📅"],
                ["Check-out", "27 May 2025", "📅"],
                ["Huéspedes", "2 huéspedes", "👥"],
                ["Tipo de alojamiento", "Todas las villas", "⌄"],
              ].map(([label, value, icon]) => (
                <div key={label} className="booking-cell rounded-2xl bg-white p-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                    {label}
                  </div>
                  <div className="mt-2 flex items-center justify-between font-black">
                    <span>{value}</span>
                    <span>{icon}</span>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setBookingOpen(true)}
                className="magnetic-cta booking-submit rounded-2xl bg-[#7A3A3A] px-8 py-4 text-sm font-black uppercase tracking-widest text-white xl:min-w-56"
              >
                {activeBookingProvider.presentation.primaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

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

      <section id="villas" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <PageSectionTitle
          eyebrow="Hospedaje boutique"
          title="Espacios para reconectar"
          cta="Ver colección completa"
          href="/villas"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {villas.map((villa) => (
            <div key={villa.id} onDoubleClick={() => setSelectedVilla(villa)}>
              <VillaCard villa={villa} />
            </div>
          ))}
        </div>
      </section>

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
            >
              Ver todas las experiencias →
            </Link>
          </article>
        </div>
      </section>

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
            {gallery.slice(1, 5).map((img) => (
              <button
                key={img}
                onClick={() => setGalleryFocus(img)}
                className="thumb-hover h-32 overflow-hidden rounded-[1.5rem] ring-[#7A3A3A] md:h-[132px]"
              >
                <img src={img} alt="Galería" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

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
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
                alt="Costa del Pacífico"
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

      <section className="bg-[#E9DFCF]/45 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div id="faq" className="rounded-[2rem] bg-white p-8 shadow-sm">
            <PageSectionTitle eyebrow="Antes de reservar" title="Preguntas frecuentes" />
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {faqs.map((item, index) => (
                <div key={item.q} className="overflow-hidden rounded-2xl border border-[#E6D9C9]">
                  <button
                    onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 bg-[#FAF6EF] p-4 text-left font-bold"
                  >
                    {item.q}
                    <span className={`transition ${faqOpen === index ? "rotate-180" : ""}`}>⌄</span>
                  </button>
                  {faqOpen === index && <p className="p-4 leading-7 text-[#6B5D53]">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              onClick={() => setBookingOpen(true)}
              className="magnetic-cta rounded-xl bg-[#FAF6EF] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#7A3A3A]"
            >
              Reservar ahora
            </button>
            <Link
              href="/villas"
              className="rounded-xl border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver villas
            </Link>
          </div>
        </div>
      </section>

      <VillaModal
        villa={selectedVilla && !bookingOpen ? selectedVilla : null}
        onClose={() => setSelectedVilla(null)}
        onReserve={(villa) => {
          setSelectedVilla(villa);
          setBookingOpen(true);
        }}
      />

      {bookingOpen && (
        <BookingPanel
          selectedVilla={selectedVillaForBooking}
          onClose={() => {
            setBookingOpen(false);
            setSelectedVilla(null);
          }}
        />
      )}
    </main>
  );
}
