const stats = [
  { value: "[PLACEHOLDER]", label: "Years in global procurement & customs clearance" },
  { value: "[PLACEHOLDER]", label: "Shipments delivered" },
  { value: "Global", label: "Countries served" },
  { value: "[PLACEHOLDER]", label: "Business & individual clients" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 30%, transparent), transparent)",
        }}
      />
      <div className="container-page relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/15 pl-5">
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/60 sm:text-sm sm:normal-case sm:tracking-normal sm:text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
