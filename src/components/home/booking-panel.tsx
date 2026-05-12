"use client";

import React, { useState } from "react";
import type { Villa } from "@/content";
import { villas } from "@/content";
import { activeBookingProvider } from "@/features/booking";

function MiniIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#E9DFCF] text-xl text-[#7A3A3A]">
      {children}
    </span>
  );
}

export function BookingPanel({
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
                {n < 3 ? (
                  <div
                    className={`h-px flex-1 ${
                      step > n ? "bg-[#7A3A3A]" : "bg-[#E9DFCF]"
                    }`}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <h2 className="font-display text-4xl text-[#2D2420]">
            {activeBookingProvider.presentation.panelTitle}
          </h2>
          <p className="mt-2 text-sm text-[#6B5D53]">
            {activeBookingProvider.presentation.panelDescription}
          </p>

          {step === 1 ? (
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
          ) : null}

          {step === 2 ? (
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
          ) : null}

          {step === 3 ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
