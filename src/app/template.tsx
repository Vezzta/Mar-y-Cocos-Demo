export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="route-shell">
      <div className="route-wipe" aria-hidden="true" />
      <div className="route-glow" aria-hidden="true" />
      <div className="route-enter">{children}</div>
    </div>
  );
}
