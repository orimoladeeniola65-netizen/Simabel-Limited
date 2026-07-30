import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const quotes = [
  {
    text: "I used SIMABEL to export my dried ponmo to the UK and it arrived well packed and on time. I recommend them to anyone flying food items abroad.",
    name: "Adaeze Nwosu",
    role: "Small Business Owner",
    avatar: avatar1,
  },
  {
    text: "SIMABEL handled the procurement and air freight for my boutique's stock from Nigeria. Smooth process, clear communication throughout.",
    name: "Chidinma Okoro",
    role: "Founder, Lagos Threads Boutique",
    avatar: avatar3,
  },
  {
    text: "I needed personal items sent to my family in London quickly. SIMABEL made it simple and stress-free.",
    name: "Emeka Balogun",
    role: "Customer",
    avatar: avatar2,
  },
  {
    text: "Reliable and honest. Exactly what you want when flying cargo internationally.",
    name: "Tunde Adeyemi",
    role: "CEO, Greenfield Foods Ltd",
    avatar: avatar4,
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={1.5} />
      ))}
    </div>
  );
}

function TestimonialCard({ q }: { q: (typeof quotes)[number] }) {
  return (
    <figure className="card-soft relative mx-3 w-[340px] shrink-0 p-7 sm:w-[380px] md:w-[420px]">
      <Quote
        className="absolute right-5 top-5 h-7 w-7 text-muted-foreground/10"
        fill="currentColor"
        strokeWidth={0}
      />
      <div className="relative">
        <StarRating />
        <blockquote className="mt-5 text-base leading-relaxed text-foreground">
          "{q.text}"
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <img
          src={q.avatar}
          alt={q.name}
          width={44}
          height={44}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-foreground">{q.name}</div>
          <div className="text-xs text-muted-foreground">{q.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const doubled = [...quotes, ...quotes];

  return (
    <section className="relative bg-muted/60 py-20 md:py-28">
      <style>{`@keyframes testimonials-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Client Stories
            </span>
            <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              What our clients say.
            </h2>
          </div>
        </Reveal>

        <div className="marquee-mask group relative mt-14 overflow-hidden">
          <div
            className="flex w-max items-stretch py-2"
            style={{ animation: `testimonials-scroll 75s linear infinite` }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {doubled.map((q, i) => (
              <TestimonialCard key={i} q={q} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
