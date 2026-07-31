import { Info } from "lucide-react";

import { Reveal } from "./Reveal";

const row1 = [
  { name: "Africa", code: "", icon: "🌍" },
  { name: "United Kingdom", code: "GB" },
  { name: "China", code: "CN" },
  { name: "Germany", code: "DE" },
  { name: "Austria", code: "AT" },
  { name: "Belgium", code: "BE" },
  { name: "Luxembourg", code: "LU" },
  { name: "Netherlands", code: "NL" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "France", code: "FR" },
  { name: "Hungary", code: "HU" },
  { name: "Italy", code: "IT" },
];

const row2 = [
  { name: "Poland", code: "PL" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Spain", code: "ES" },
  { name: "Ireland", code: "IE" },
  { name: "Portugal", code: "PT" },
  { name: "Sweden", code: "SE" },
  { name: "Estonia", code: "EE" },
  { name: "Finland", code: "FI" },
  { name: "Croatia", code: "HR" },
  { name: "Lithuania", code: "LT" },
  { name: "Latvia", code: "LV" },
];

function flagEmoji(code: string) {
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

function Chip({ name, code, icon }: { name: string; code: string; icon?: string }) {
  return (
    <span className="mx-3 inline-flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface px-7 py-3.5 text-base font-semibold text-foreground shadow-sm">
      <span className="text-2xl leading-none" aria-hidden>
        {icon ?? flagEmoji(code)}
      </span>
      {name}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 60,
}: {
  items: { name: string; code: string; icon?: string }[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask group relative overflow-hidden">
      <div
        className="flex w-max"
        style={{
          animation: `marquee-scroll ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((c, i) => (
          <Chip key={`${c.name}-${i}`} name={c.name} code={c.code} icon={c.icon} />
        ))}
      </div>
    </div>
  );
}

export function CountriesMarquee() {
  return (
    <section className="relative py-20 md:py-28">
      <style>{`@keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="container-page">
        <div className="card-soft overflow-hidden px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Where We Fly
              </span>
              <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Countries We Send and Receive Cargo From
              </h2>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Procurement and customs clearance for shipments from anywhere in the world,
                delivered to the UK.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-5">
            <MarqueeRow items={row1} duration={75} />
            <MarqueeRow items={row2} reverse duration={75} />
          </div>

          <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <Info className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
            Procurement available from virtually any country, tailored to your specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
