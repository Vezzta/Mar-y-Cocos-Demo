"use client";

import React, { useMemo, useState } from "react";

type Villa = {
  id: string;
  name: string;
  tag: string;
  rooms: string;
  guests: string;
  price: string;
  description: string;
  image: string;
  amenities: string[];
};

type NavItem = {
  label: string;
  id: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type Experience = {
  title: string;
  icon: string;
  copy: string;
  image: string;
};

const brand = {
  terracotta: "#7A3A3A",
  wine: "#6E3030",
  sand: "#E9DFCF",
  ivory: "#FAF6EF",
};

const navItems: NavItem[] = [
  { label: "Villas", id: "villas" },
  { label: "Amenidades", id: "amenidades" },
  { label: "Experiencias", id: "experiencias" },
  { label: "Galería", id: "galeria" },
  { label: "Ubicación", id: "ubicacion" },
  { label: "FAQ", id: "faq" },
  { label: "Contacto", id: "contacto" },
];

const villas: Villa[] = [
  {
    id: "mar",
    name: "Casa Mar",
    tag: "Frente al mar",
    rooms: "2 habitaciones",
    guests: "Hasta 4 huéspedes",
    price: "$4,800 MXN",
    description:
      "Vista directa al Pacífico, terraza privada y acceso inmediato a la playa para despertar con el sonido del mar.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Vista al mar", "Terraza", "A/C", "Cocina"],
  },
  {
    id: "cocos",
    name: "Casa Cocos",
    tag: "Vista al océano",
    rooms: "2 habitaciones",
    guests: "Hasta 4 huéspedes",
    price: "$5,200 MXN",
    description:
      "Alberca frente al mar, rincones para descansar y una terraza ideal para atardeceres inolvidables.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Alberca", "WiFi", "A/C", "Vista"],
  },
  {
    id: "palma",
    name: "Casa Palma",
    tag: "Jardín tropical",
    rooms: "3 habitaciones",
    guests: "Hasta 6 huéspedes",
    price: "$6,200 MXN",
    description:
      "Espacios amplios rodeados de palmeras, jardín tropical, cocina equipada y alberca privada.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Jardín", "Alberca", "Cocina", "Familias"],
  },
  {
    id: "arena",
    name: "Casa Arena",
    tag: "Para parejas",
    rooms: "1 habitación",
    guests: "Hasta 2 huéspedes",
    price: "$3,800 MXN",
    description:
      "Privacidad total, interiores cálidos y una terraza íntima para escapadas románticas junto al mar.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Privada", "Terraza", "A/C", "Romántica"],
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=1000&q=80",
];

const experiences: Experience[] = [
  {
    title: "Paseo en velero",
    icon: "⛵",
    copy: "Navega la costa del Pacífico y descubre bahías escondidas al ritmo de Manzanillo.",
    image:
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Snorkel & naturaleza",
    icon: "🐠",
    copy: "Aguas cristalinas, vida marina y una experiencia perfecta para conectar con la naturaleza.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Atardeceres & cenas",
    icon: "🌅",
    copy: "Cenas frente al mar, luz dorada y el ambiente íntimo que hace memorable cada noche.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
];

const faqs: FaqItem[] = [
  {
    q: "¿Cuál es el horario de check-in y check-out?",
    a: "El check-in sugerido es a partir de las 3:00 pm y el check-out antes de las 12:00 pm. Se puede solicitar llegada temprana según disponibilidad.",
  },
  {
    q: "¿Se aceptan niños o mascotas?",
    a: "El sitio puede mostrar políticas por villa. Para este demo se plantea una sección clara de reglas antes de reservar.",
  },
  {
    q: "¿Incluye servicio de limpieza?",
    a: "Sí, se puede incluir limpieza programada o agregarla como extra durante el proceso de reserva.",
  },
  {
    q: "¿Puedo pagar en línea?",
    a: "La intención es conectar el frontend con un PMS o booking engine tercero para manejar pagos, disponibilidad y confirmaciones.",
  },
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="leading-none">
      <div className="mb-1 h-5 w-28">
        <svg viewBox="0 0 180 32" className="h-full w-full" fill="none">
          <path
            d="M1 20 C28 20, 45 4, 76 13 C93 18, 103 21, 120 14 C135 8, 144 9, 154 19 C164 30, 176 22, 179 22"
            stroke={dark ? brand.terracotta : "#FAF6EF"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        className={`text-lg font-black tracking-[0.18em] ${
          dark ? "text-[#7A3A3A]" : "text-[#FAF6EF]"
        }`}
      >
        MAR & COCOS
      </div>
      <div
        className={`mt-1 text-[10px] font-semibold tracking-[0.32em] ${
          dark ? "text-[#7A3A3A]/75" : "text-[#FAF6EF]/80"
        }`}
      >
        HOTEL/VILLAS
      </div>
    </div>
  );
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
          <Logo />
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
            Reservar tu estadía
          </h2>
          <p className="mt-2 text-sm text-[#6B5D53]">
            Demo interactivo del flujo. En producción, estos campos se
            conectarían al PMS o booking engine elegido.
          </p>

          {step === 1 && (
            <div className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E1D6C8] bg-white p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7A3A3A]">
                    Check-in
                  </span>
                  <div className="mt-2 flex items-center justify-between text-[#2D2420]">
                    <span className="font-semibold">24 May 2025</span>
                    <span>📅</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E1D6C8] bg-white p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7A3A3A]">
                    Check-out
                  </span>
                  <div className="mt-2 flex items-center justify-between text-[#2D2420]">
                    <span className="font-semibold">27 May 2025</span>
                    <span>📅</span>
                  </div>
                </div>
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
                Ver disponibilidad
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
                    Tu selección está lista para enviarse al motor de reservas.
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
                  <strong>Seguro vía PMS</strong>
                </div>
              </div>
              <button className="mt-6 w-full rounded-2xl bg-[#7A3A3A] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#6E3030]">
                Continuar al pago
              </button>
              <button
                onClick={() => setStep(1)}
                className="mt-3 w-full rounded-2xl border border-[#E1D6C8] px-6 py-4 text-sm font-bold text-[#7A3A3A]"
              >
                Editar búsqueda
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
          <img
            src={villa.image}
            alt={villa.name}
            className="h-full w-full object-cover"
          />
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
            <p className="text-lg leading-8 text-[#5B4D43]">
              {villa.description}
            </p>
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
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="text-xs font-black uppercase tracking-widest text-[#7A3A3A]">
              Desde
            </div>
            <div className="mt-1 text-3xl font-black text-[#2D2420]">
              {villa.price}
            </div>
            <div className="text-sm text-[#6B5D53]">por noche</div>
            <div className="mt-5 space-y-3 text-sm text-[#6B5D53]">
              <div>🛏️ {villa.rooms}</div>
              <div>👥 {villa.guests}</div>
              <div>✨ Atención personalizada</div>
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

export default function MarCocosDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [galleryFocus, setGalleryFocus] = useState(gallery[0]);

  const selectedVillaForBooking = useMemo(() => selectedVilla, [selectedVilla]);

  const openBooking = (villa: Villa | null = null) => {
    setSelectedVilla(villa);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#2D2420] selection:bg-[#7A3A3A] selection:text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#7A3A3A]/95 text-white shadow-lg shadow-[#7A3A3A]/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-left"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.18em] lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/75 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => openBooking(null)}
              className="rounded-full bg-[#FAF6EF] px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#7A3A3A] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
            >
              Reservar ahora
            </button>
          </div>

          <button
            className="rounded-full bg-white/10 p-3 text-xl lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#6E3030] px-5 py-4 lg:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMenuOpen(false);
                  }}
                  className="rounded-2xl px-3 py-3 text-left text-sm font-bold uppercase tracking-widest text-white/85 hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => openBooking(null)}
                className="rounded-2xl bg-[#FAF6EF] px-4 py-4 font-black uppercase tracking-widest text-[#7A3A3A]"
              >
                Reservar ahora
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
              alt="Costa tropical en Manzanillo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/50 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center px-5 pb-44 pt-20 md:px-8 md:pb-36">
            <div className="max-w-3xl text-white">
              <div className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] backdrop-blur">
                10 villas privadas en Manzanillo, Colima
              </div>
              <h1 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                Tu refugio boutique entre el mar y las palmeras
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                Una experiencia costera íntima, cálida y natural para descansar,
                celebrar y reconectar con el Pacífico.
              </p>
            </div>

            <div className="absolute bottom-6 left-5 right-5 rounded-[2rem] border border-white/40 bg-[#FAF6EF]/95 p-4 shadow-2xl backdrop-blur md:left-8 md:right-8 lg:bottom-10 lg:left-1/2 lg:right-auto lg:w-[1050px] lg:-translate-x-1/2">
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
                <div className="rounded-2xl bg-white p-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                    Check-in
                  </div>
                  <div className="mt-2 flex items-center justify-between font-black">
                    <span>24 May 2025</span>
                    <span>📅</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                    Check-out
                  </div>
                  <div className="mt-2 flex items-center justify-between font-black">
                    <span>27 May 2025</span>
                    <span>📅</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                    Huéspedes
                  </div>
                  <div className="mt-2 flex items-center justify-between font-black">
                    <span>2 huéspedes</span>
                    <span>👥</span>
                  </div>
                </div>
                <button
                  onClick={() => openBooking(null)}
                  className="rounded-2xl bg-[#7A3A3A] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-[#6E3030] hover:shadow-xl md:min-w-56"
                >
                  Ver disponibilidad
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="villas"
          className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:px-8"
        >
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
                Hospedaje boutique
              </p>
              <h2 className="mt-2 font-display text-5xl text-[#2D2420]">
                Nuestras Villas
              </h2>
            </div>
            <button
              onClick={() => openBooking(null)}
              className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#7A3A3A]"
            >
              Consultar disponibilidad{" "}
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {villas.map((villa) => (
              <article
                key={villa.id}
                className="group overflow-hidden rounded-[1.7rem] border border-[#E6D9C9] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <button
                  onClick={() => setSelectedVilla(villa)}
                  className="block w-full text-left"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={villa.image}
                      alt={villa.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-[#FAF6EF]/95 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                      {villa.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-3xl">{villa.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-[#6B5D53]">
                      {villa.rooms} · {villa.guests}
                    </p>
                    <p className="mt-4 min-h-20 text-sm leading-6 text-[#6B5D53]">
                      {villa.description}
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                          Desde
                        </div>
                        <div className="text-lg font-black text-[#7A3A3A]">
                          {villa.price}
                        </div>
                      </div>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F4EEE6] text-[#7A3A3A] transition group-hover:bg-[#7A3A3A] group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="amenidades" className="scroll-mt-28 bg-[#E9DFCF]/55 py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
                  Todo para descansar
                </p>
                <h2 className="mt-2 font-display text-5xl">Amenidades</h2>
              </div>
              <p className="max-w-xl text-[#6B5D53]">
                Servicios pensados para una estancia sencilla, íntima y cómoda
                frente al mar.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
              {[
                ["🌊", "Alberca infinita"],
                ["📍", "Acceso a playa"],
                ["📶", "WiFi Starlink"],
                ["❄️", "Aire acondicionado"],
                ["🍽️", "Cocina equipada"],
                ["☕", "Desayuno"],
                ["✨", "Atención personalizada"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] bg-[#FAF6EF] p-5 text-center shadow-sm"
                >
                  <div className="mx-auto text-3xl text-[#7A3A3A]">{icon}</div>
                  <div className="mt-3 text-sm font-bold text-[#5B4D43]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="galeria"
          className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:px-8"
        >
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
                Momentos Mar & Cocos
              </p>
              <h2 className="mt-2 font-display text-5xl">Galería</h2>
            </div>
            <p className="max-w-lg text-[#6B5D53]">
              Haz clic en las fotos para cambiar la imagen principal del mosaico.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="h-[430px] overflow-hidden rounded-[2rem]">
              <img
                src={galleryFocus}
                alt="Galería destacada"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(1).map((img) => (
                <button
                  key={img}
                  onClick={() => setGalleryFocus(img)}
                  className="h-32 overflow-hidden rounded-[1.5rem] ring-[#7A3A3A] transition hover:-translate-y-1 hover:ring-4 md:h-[132px]"
                >
                  <img
                    src={img}
                    alt="Galería"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="scroll-mt-28 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
                  Qué hacer cerca
                </p>
                <h2 className="mt-2 font-display text-5xl">
                  Experiencias en Manzanillo
                </h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {experiences.map((exp) => (
                <article
                  key={exp.title}
                  className="group overflow-hidden rounded-[2rem] border border-[#E6D9C9] bg-[#FAF6EF] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
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
          className="mx-auto grid max-w-7xl scroll-mt-28 gap-8 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="rounded-[2rem] bg-[#7A3A3A] p-8 text-white">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/65">
              Manzanillo, Colima
            </p>
            <h2 className="mt-3 font-display text-5xl">
              Entre el mar y la calma
            </h2>
            <p className="mt-5 leading-8 text-white/80">
              Una ubicación pensada para desconectar: playa, naturaleza,
              atardeceres y fácil acceso a restaurantes, paseos y experiencias
              locales.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF6EF] px-6 py-3 text-sm font-black uppercase tracking-widest text-[#7A3A3A]">
              Cómo llegar →
            </button>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#E9DFCF] p-8">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, #9ED5DB 0 18%, transparent 19%), linear-gradient(135deg, #CFE8E8 0 38%, #F1E1CC 39% 100%)",
              }}
            />
            <svg
              className="absolute inset-0 h-full w-full opacity-60"
              viewBox="0 0 900 420"
              fill="none"
            >
              <path
                d="M0 300 C180 210 270 350 430 260 C600 160 700 210 900 110"
                stroke="#ffffff"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <path
                d="M130 80 C250 140 330 80 460 150 C590 220 720 170 810 250"
                stroke="#ffffff"
                strokeWidth="16"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#7A3A3A] text-white">
                  📍
                </div>
                <div>
                  <div className="font-display text-2xl">Mar & Cocos</div>
                  <div className="text-sm text-[#6B5D53]">
                    Hotel/Villas · Playa La Audiencia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E9DFCF]/45 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
                Opiniones
              </p>
              <h2 className="mt-3 font-display text-5xl">
                Huéspedes que vuelven
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  "Un lugar mágico para desconectar. La atención, la privacidad y la vista son simplemente perfectas.",
                  "La villa estaba impecable, el atardecer fue espectacular y reservar fue muy sencillo.",
                ].map((quote, index) => (
                  <div key={quote} className="rounded-3xl bg-[#FAF6EF] p-6">
                    <div className="mb-4 flex gap-1 text-[#7A3A3A]">★★★★★</div>
                    <p className="font-display text-2xl leading-9">“{quote}”</p>
                    <div className="mt-5 text-sm font-bold text-[#6B5D53]">
                      {index === 0
                        ? "Paula G. · CDMX"
                        : "Daniel R. · Guadalajara"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="faq"
              className="scroll-mt-28 rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
                Antes de reservar
              </p>
              <h2 className="mt-3 font-display text-5xl">
                Preguntas frecuentes
              </h2>
              <div className="mt-8 space-y-3">
                {faqs.map((item, index) => (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-2xl border border-[#E6D9C9]"
                  >
                    <button
                      onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 bg-[#FAF6EF] p-4 text-left font-bold"
                    >
                      {item.q}
                      <span
                        className={`transition ${faqOpen === index ? "rotate-180" : ""}`}
                      >
                        ⌄
                      </span>
                    </button>
                    {faqOpen === index && (
                      <p className="p-4 leading-7 text-[#6B5D53]">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="scroll-mt-28 bg-[#6E3030] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
          <div>
            <Logo />
            <p className="mt-5 leading-7 text-white/70">
              Un hotel boutique con villas privadas frente al mar, donde el
              tiempo se detiene y la naturaleza te abraza.
            </p>
            <div className="mt-6 flex gap-3 text-white/80">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>WhatsApp</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/55">
              Contacto
            </h3>
            <div className="mt-5 space-y-3 text-white/75">
              <div>☎ +52 314 123 4567</div>
              <div>✉ hola@marcocos.com</div>
              <div>📍 Manzanillo, Colima</div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/55">
              Enlaces
            </h3>
            <div className="mt-5 grid gap-2 text-white/75">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-white/55">
              Newsletter
            </h3>
            <p className="mt-5 text-white/75">
              Recibe ofertas exclusivas y novedades.
            </p>
            <div className="mt-5 flex rounded-2xl bg-white p-2">
              <input
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#2D2420] outline-none"
                placeholder="Tu correo electrónico"
              />
              <button className="grid h-11 w-11 place-items-center rounded-xl bg-[#7A3A3A]">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45 md:px-8">
          © 2025 Mar & Cocos Hotel/Villas. Demo conceptual para frontend
          Next.js + Tailwind + PMS/booking engine tercero.
        </div>
      </footer>

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
    </div>
  );
}
