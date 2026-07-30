import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-white.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="SIMABEL Limited"
            width={280}
            height={50}
            className="h-7 w-auto md:h-8"
          />
        </a>

        {/* Centered nav pill */}
        <nav className="pointer-events-auto hidden md:flex">
          <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1.5 backdrop-blur-md">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/447405872917?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20shipping%20or%20procurement."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
          >
            Get Started <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/15 bg-navy/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1 p-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/447405872917?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20shipping%20or%20procurement."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Get Started <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
