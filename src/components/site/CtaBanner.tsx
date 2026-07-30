import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-ship.jpg";

export function CtaBanner() {
  return (
    <section id="contact" className="relative py-12 md:py-20">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[28px] border border-white/10 shadow-[var(--shadow-elevated)]">
          <img
            src={heroImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(115deg, color-mix(in oklab, var(--navy) 92%, transparent) 0%, color-mix(in oklab, var(--navy) 78%, transparent) 60%, color-mix(in oklab, var(--navy) 65%, transparent) 100%)",
            }}
          />
          <div className="container-page relative py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center text-white">
              <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
                Ready when you are
              </span>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-6xl">
                Ready to move your cargo? <br className="hidden sm:block" />
                Get in touch today.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
                Tell us what you're flying between Nigeria and the UK. You'll get a clear quote and
                a named coordinator to see it through.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/447405872917?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20shipping%20or%20procurement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
