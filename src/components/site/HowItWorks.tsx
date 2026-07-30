import { MessageSquare, CalendarCheck, Package, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: MessageSquare,
    title: "Request a Quote",
    desc: "Reach out via WhatsApp with details of what you need flown or sourced.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm Booking",
    desc: "We confirm pricing, timelines, and next steps with you directly.",
  },
  {
    icon: Package,
    title: "We Handle It",
    desc: "Procurement, air freight, and customs clearance handled end-to-end.",
  },
  {
    icon: MapPin,
    title: "Delivered to Your Door",
    desc: "Final-mile delivery straight to your doorstep in the UK.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              How It Works
            </span>
            <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              From Quote to Delivery
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              A simple, transparent process with no chasing updates, no surprise fees, and no
              dropped handoffs between vendors.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 md:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-foreground md:text-xl">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
