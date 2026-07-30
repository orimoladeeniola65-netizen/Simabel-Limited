import airCargoImg from "@/assets/service-bento-air.jpg";
import warehouseImg from "@/assets/service-bento-warehouse.jpg";
import customsImg from "@/assets/service-bento-customs.jpg";
import doorstepImg from "@/assets/service-bento-doorstep.jpg";
import { Reveal } from "./Reveal";

const services = [
  {
    tag: "Every Friday",
    title: "Air Cargo (Nigeria to UK)",
    desc: "One of our established freight lanes: reliable weekly air cargo between Nigeria and the UK, departing every Friday with full tracking support.",
    image: airCargoImg,
  },
  {
    tag: "Global Sourcing",
    title: "Procurement & Sourcing",
    desc: "The core of what we do: sourcing and consolidating goods on your behalf from China, Nigeria, or anywhere else in the world.",
    image: warehouseImg,
  },
  {
    tag: "Hassle-Free",
    title: "Customs Clearance",
    desc: "Documentation and duties handled at both ends, so nothing gets delayed or held up at the border, no matter which country your shipment is coming from.",
    image: customsImg,
  },
  {
    tag: "Doorstep",
    title: "Doorstep Delivery",
    desc: "Final-mile delivery straight to your door, wherever you are in the UK.",
    image: doorstepImg,
  },
] as const;

function ServiceCard({
  tag,
  title,
  desc,
  image,
}: {
  tag: string;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <article className="mx-3 flex h-full w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl bg-white shadow-sm sm:w-[380px] md:w-[420px]">
      <div className="p-3 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-muted/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
          {tag}
        </span>
        <h3 className="text-xl font-bold leading-snug text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

export function Services() {
  const doubled = [...services, ...services];

  return (
    <section id="services" className="relative bg-[#F7F7F5] py-20 md:py-28">
      <style>{`@keyframes services-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Our Services
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              What We Handle For You
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Simple, reliable service across every step of your shipment.
            </p>
          </div>
        </Reveal>

        <div className="marquee-mask group relative mt-14 overflow-hidden">
          <div
            className="flex w-max items-stretch py-2"
            style={{ animation: `services-scroll 75s linear infinite` }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {doubled.map((s, i) => (
              <ServiceCard key={`${s.title}-${i}`} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
