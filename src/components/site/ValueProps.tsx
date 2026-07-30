import { Tag, ShieldCheck, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Tag,
    label: "Transparent Pricing",
    title: "No Hidden Fees",
    desc: "Clear, upfront quotes every time",
  },
  {
    icon: ShieldCheck,
    label: "Reliable Delivery",
    title: "On-Time, Always",
    desc: "Consistent delivery you can count on",
  },
  {
    icon: MessageCircle,
    label: "Direct Support",
    title: "We're One Message Away",
    desc: "Real support via WhatsApp, start to finish",
  },
];

export function ValueProps() {
  return (
    <section id="why-us" className="relative py-20 md:py-28">
      <div className="container-page">
        <div className="overflow-hidden rounded-[28px] bg-charcoal px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Why Choose Us
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/70 md:text-base">
                Reliable procurement, customs clearance, and delivery, every time
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-background shadow-sm">
                  {/* Top section with badge */}
                  <div className="px-6 py-8">
                    <div className="inline-flex items-center gap-3 rounded-full bg-background/85 px-4 py-2.5 shadow-sm ring-1 ring-accent/20">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
                        <it.icon className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{it.label}</span>
                    </div>

                    {/* Decorative placeholder lines */}
                    <div className="mt-5 space-y-2">
                      <div className="h-2.5 w-full max-w-[140px] rounded-full bg-foreground/15" />
                      <div className="h-2.5 w-full max-w-[100px] rounded-full bg-foreground/15" />
                    </div>
                  </div>

                  {/* Orange accent divider */}
                  <div className="h-1 w-full bg-accent" />

                  {/* Bottom section */}
                  <div className="flex-1 px-6 py-7">
                    <h3 className="text-xl font-bold leading-tight text-foreground">{it.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
