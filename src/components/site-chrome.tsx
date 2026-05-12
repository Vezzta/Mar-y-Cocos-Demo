"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/content";
import { getBookingAction } from "@/features/booking";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="leading-none">
      <div className="mb-1 h-5 w-28">
        <svg viewBox="0 0 180 32" className="h-full w-full" fill="none">
          <path
            d="M1 20 C28 20, 45 4, 76 13 C93 18, 103 21, 120 14 C135 8, 144 9, 154 19 C164 30, 176 22, 179 22"
            stroke={dark ? "#7A3A3A" : "#FAF6EF"}
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

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const stickyBookingAction = getBookingAction("sticky");

  const isActiveNavItem = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 text-white transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#6b3333]/84 shadow-2xl shadow-[#4e2626]/15 backdrop-blur-2xl"
          : "border-b border-white/10 bg-[#7A3A3A]/95 shadow-lg shadow-[#7A3A3A]/10 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="text-left">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.18em] lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActiveNavItem(item.href) ? "nav-link-active" : ""}`}
              data-analytics-event="navigation_primary_click"
              data-analytics-category="navigation"
              data-analytics-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={stickyBookingAction.href ?? "/villas"}
          target={stickyBookingAction.target}
          className={`hidden rounded-full bg-[#FAF6EF] px-6 text-xs font-black uppercase tracking-[0.18em] text-[#7A3A3A] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-xl md:inline-flex ${
            scrolled ? "py-2.5" : "py-3"
          }`}
          data-booking-event={stickyBookingAction.eventName}
          data-booking-kind={stickyBookingAction.kind}
        >
          {stickyBookingAction.label}
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-28 bg-[#6E3030] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <Logo />
          <p className="mt-5 leading-7 text-white/70">
            Un hotel boutique con villas privadas frente al mar, donde el tiempo
            se detiene y la naturaleza te abraza.
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
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
                data-analytics-event="navigation_footer_click"
                data-analytics-category="navigation"
                data-analytics-label={item.label}
              >
                {item.label}
              </Link>
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
        © 2025 Mar & Cocos Hotel/Villas. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="premium-panel rounded-[2rem] px-6 py-8 md:px-8 md:py-10">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-5xl text-[#2D2420] md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-[#6B5D53] md:text-lg">
        {copy}
      </p>
    </div>
  );
}

export function PageSectionTitle({
  eyebrow,
  title,
  cta,
  href,
}: {
  eyebrow: string;
  title: string;
  cta?: string;
  href?: string;
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7A3A3A]">
          {eyebrow}
        </p>
        <h2 className="mt-2 max-w-[12ch] font-display text-5xl leading-[0.98] text-[#2D2420]">
          {title}
        </h2>
      </div>
      {cta && href ? (
        <Link
          href={href}
          className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#7A3A3A]"
        >
          {cta}
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      ) : null}
    </div>
  );
}
