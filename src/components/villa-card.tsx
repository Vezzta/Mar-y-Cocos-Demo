import Link from "next/link";
import type { Villa } from "@/lib/site-data";

export function VillaCard({
  villa,
  showDescription = true,
}: {
  villa: Villa;
  showDescription?: boolean;
}) {
  return (
    <article className="group surface-hover overflow-hidden rounded-[1.7rem] border border-[#E6D9C9] bg-white shadow-sm">
      <Link href={`/villas/${villa.slug}`} className="block w-full text-left">
        <div className="image-sheen relative h-56 overflow-hidden">
          <img
            src={villa.image}
            alt={villa.name}
            className="media-zoom h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/20 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
          <div className="absolute left-4 top-4 rounded-full bg-[#FAF6EF]/95 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
            {villa.tag}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-3xl transition duration-300 group-hover:text-[#7A3A3A]">
            {villa.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#6B5D53]">
            {villa.rooms} · {villa.guests}
          </p>
          {showDescription ? (
            <p className="mt-4 min-h-20 text-sm leading-6 text-[#6B5D53]">
              {villa.description}
            </p>
          ) : null}
          <div className="mt-5 flex items-end justify-between gap-3">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#7A3A3A]">
                Desde
              </div>
              <div className="text-lg font-black text-[#7A3A3A]">
                {villa.price}
              </div>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F4EEE6] text-[#7A3A3A] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#7A3A3A] group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
