"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import { primaryNav } from "@/content";
import { getBookingAction } from "@/features/booking";

export function Logo({ dark = false }: { dark?: boolean }) {
  const textTone = dark ? "text-[#7A3A3A]" : "text-[#FAF6EF]";
  const textSubtone = dark ? "text-[#7A3A3A]/75" : "text-[#FAF6EF]/80";
  const symbolFilter = dark
    ? "brightness(0) saturate(100%) invert(23%) sepia(21%) saturate(1203%) hue-rotate(314deg) brightness(92%) contrast(92%)"
    : "brightness(0) saturate(100%) invert(100%) brightness(104%) contrast(100%)";

  return (
    <div className="inline-flex flex-col leading-none">
      <div className="mb-1.5 h-[37px] w-[255px]">
        <img
          src="/logo-symbol.svg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-left"
          style={{
            filter: symbolFilter,
          }}
        />
      </div>
      <div className={`flex items-baseline gap-[0.18em] text-[1.4rem] tracking-[0.18em] ${textTone}`}>
        <span className="font-black">MAR</span>
        <span className="font-medium tracking-[0.08em] opacity-90">&</span>
        <span className="font-black">COCOS</span>
      </div>
      <div className={`mt-1.5 text-[12px] font-semibold tracking-[0.32em] ${textSubtone}`}>
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
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((current) => {
        if (current) {
          return y > 8;
        }

        return y > 24;
      });
    };

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
          scrolled ? "py-4" : "py-5"
        }`}
      >
        <Link href="/" className="text-left">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-black uppercase tracking-[0.18em] lg:flex">
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
          className={`hidden rounded-full bg-[#FAF6EF] px-7 text-[13px] font-black uppercase tracking-[0.18em] text-[#7A3A3A] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-xl md:inline-flex ${
            scrolled ? "py-3" : "py-3.5"
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
            <div className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4" />
              <span>+52 314 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4" />
              <span>hola@marcocos.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="location" className="h-4 w-4" />
              <span>Manzanillo, Colima</span>
            </div>
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
