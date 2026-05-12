"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Villa } from "@/content";

export function VillaModal({
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
              <div className="flex items-center gap-3">
                <Icon name="bed" className="h-[18px] w-[18px] text-[#7A3A3A]" />
                <span>{villa.rooms}</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="bath" className="h-[18px] w-[18px] text-[#7A3A3A]" />
                <span>{villa.bathrooms}</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="users" className="h-[18px] w-[18px] text-[#7A3A3A]" />
                <span>{villa.guests}</span>
              </div>
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
