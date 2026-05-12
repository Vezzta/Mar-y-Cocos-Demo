export function AssetPlanCard({
  title,
  copy,
  path,
}: {
  title: string;
  copy: string;
  path: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-[#E6D9C9] bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7A3A3A]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-6 text-[#6B5D53]">{copy}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#B67D6E]">
        {path}
      </p>
    </div>
  );
}

export function VideoPlaceholder({
  eyebrow,
  title,
  copy,
  fileHint,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  fileHint: string;
}) {
  return (
    <div className="villa-video-placeholder">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-4xl text-white">{title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/78">{copy}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/65">
          {fileHint}
        </p>
      </div>
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15 text-2xl text-white backdrop-blur">
        ▶
      </div>
    </div>
  );
}
