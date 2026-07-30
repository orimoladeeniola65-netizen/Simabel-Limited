import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import carton01 from "@/assets/cargo-cartons/carton-01.jpg";
import carton02 from "@/assets/cargo-cartons/carton-02.jpg";
import carton03 from "@/assets/cargo-cartons/carton-03.jpg";
import carton05 from "@/assets/cargo-cartons/carton-05.jpg";
import carton06 from "@/assets/cargo-cartons/carton-06.jpg";
import carton07 from "@/assets/cargo-cartons/carton-07.jpg";
import carton08 from "@/assets/cargo-cartons/carton-08.jpg";
import carton09 from "@/assets/cargo-cartons/carton-09.jpg";
import carton10 from "@/assets/cargo-cartons/carton-10.jpg";
import carton11 from "@/assets/cargo-cartons/carton-11.jpg";
import carton12 from "@/assets/cargo-cartons/carton-12.jpg";
import carton13 from "@/assets/cargo-cartons/carton-13.jpg";
import carton14 from "@/assets/cargo-cartons/carton-14.jpg";
import carton15 from "@/assets/cargo-cartons/carton-15.jpg";
import carton16 from "@/assets/cargo-cartons/carton-16.jpg";

const images = [
  carton01,
  carton02,
  carton03,
  carton05,
  carton06,
  carton07,
  carton08,
  carton09,
  carton10,
  carton11,
  carton12,
  carton13,
  carton14,
  carton15,
  carton16,
];

// Rotation repeats on a fixed period as the row scrolls: one frame per
// period sits flat at rotateY(0), tapering out symmetrically to +/-MAX_ANGLE
// at the frames either side of it. Perspective on the wrapper + rotateY on
// each frame (not a 2D rotate) is what produces the tapered, trapezoid frame
// shapes from the reference.
const DESKTOP_SIZE = { cardW: 200, cardH: 268, overlap: 46 };
const MOBILE_SIZE = { cardW: 122, cardH: 164, overlap: 28 };
const MAX_ANGLE = 42; // deg, at the outermost frames of each period
const SPEED_PX_S = 60; // marquee speed, matches the pace of the other carousels

export function About() {
  const isMobile = useIsMobile();
  const { cardW: CARD_W, cardH: CARD_H, overlap: OVERLAP } = isMobile ? MOBILE_SIZE : DESKTOP_SIZE;
  const doubled = [...images, ...images];
  const n = images.length;
  // The rotation period is locked to the image count itself, so the arc
  // pattern's phase always matches up exactly where the doubled list repeats
  // - no visible rotation jump at the seam when the marquee loops.
  const half = Math.floor(n / 2);
  const angleFor = (index: number) => (((index % n) - half) / half) * MAX_ANGLE;
  // Width of exactly one copy of the row (including its internal overlaps) -
  // the distance the track must shift for the loop to seam invisibly.
  const trackWidth = n * CARD_W - (n - 1) * OVERLAP;
  const duration = trackWidth / SPEED_PX_S;

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              About SIMABEL
            </span>
            <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Built on Real Air Shipments, Not Just Promises.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              We started SIMABEL Limited to make procurement easy and cross-border customs clearance
              simple and trustworthy, from China, Africa, Europe, the US, and beyond.
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href="https://wa.me/447405872917?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20shipping%20or%20procurement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get a Quote
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <style>{`@keyframes cargo-track-scroll { from { transform: translateX(0); } to { transform: translateX(-${trackWidth}px); } }`}</style>
        <div
          className="relative mt-14"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%", height: `${CARD_H}px` }}
        >
          <div
            className="flex items-center will-change-transform"
            style={{
              transformStyle: "preserve-3d",
              animation: `cargo-track-scroll ${duration}s linear infinite`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {doubled.map((src, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-elevated)]"
                style={{
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  marginLeft: i === 0 ? 0 : `-${OVERLAP}px`,
                  transform: `rotateY(${angleFor(i)}deg)`,
                }}
              >
                <img
                  src={src}
                  alt={`Shipped cargo carton ${(i % images.length) + 1}`}
                  loading="lazy"
                  width={800}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40" />
        </div>
      </Reveal>
    </section>
  );
}
