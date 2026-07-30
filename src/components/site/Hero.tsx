import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "./Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import heroPoster from "@/assets/hero-video-poster.jpg";

const PARALLAX_FACTOR = 0.18; // video lags scroll by this fraction, creating depth

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    const parallax = parallaxRef.current;
    if (!section || !parallax) return;

    let ticking = false;
    const apply = () => {
      ticking = false;
      const cap = section.offsetHeight;
      const y = Math.min(Math.max(window.scrollY, 0), cap);
      parallax.style.transform = `translateY(${y * PARALLAX_FACTOR}px)`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section id="top" ref={sectionRef} className="relative px-3 pt-3 md:px-5 md:pt-5">
      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/10 shadow-[var(--shadow-elevated)]">
        <style>{`@keyframes hero-media-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }`}</style>

        {/* Oversized wrapper absorbs the parallax translate without exposing edges */}
        <div
          ref={parallaxRef}
          className="absolute inset-x-0 -top-[20%] -z-20 h-[130%] w-full will-change-transform"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster}
            className="h-full w-full object-cover will-change-transform"
            style={{ animation: "hero-media-breathe 26s ease-in-out infinite" }}
          >
            <source src="/videos/hero-bg.webm" type="video/webm" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark gradient overlay — heavier bottom-left for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,14,28,0.9) 0%, rgba(8,14,28,0.65) 40%, rgba(8,14,28,0.2) 70%, rgba(8,14,28,0.08) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,14,28,0.55) 0%, rgba(8,14,28,0.12) 30%, rgba(8,14,28,0.4) 75%, rgba(8,14,28,0.88) 100%)",
          }}
        />

        <Navbar />

        <div className="container-page relative flex min-h-[86vh] flex-col justify-end pb-14 pt-40 md:min-h-[92vh] md:pb-20">
          <div className="max-w-[46rem]">
            <h1 className="text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-[4.5rem]">
              Your Global Partner
              <br />
              for Procurement
              <br />
              and UK Customs
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
              SIMABEL Limited handles global procurement and UK customs clearance for shipments from
              China, Nigeria, and anywhere in the world.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/447405872917?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20shipping%20or%20procurement."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/18 hover:-translate-y-0.5"
              >
                Our Services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
