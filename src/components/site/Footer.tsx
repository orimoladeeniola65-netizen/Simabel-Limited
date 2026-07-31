import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-white.png";

const cols = [
  {
    title: "Services",
    links: [
      "Customs Brokerage (Africa ⇄ Europe)",
      "Procurement & Sourcing",
      "Customs Clearance",
      "Doorstep Delivery",
    ],
  },
  {
    title: "Company",
    links: ["About", "How It Works", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center">
              <img
                src={logo}
                alt="SIMABEL Limited"
                width={280}
                height={50}
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Global procurement and UK customs brokerage for shipments from China, Africa, Europe,
              the US, and anywhere in the world, handled end-to-end by one accountable team.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  Sherbourne House, Humber Ave,
                  <br />
                  CV1 2AQ, United Kingdom
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+447918303088" className="transition-colors hover:text-accent">
                  07918 303 088
                </a>
              </li>
            </ul>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-white">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/70 transition-colors hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} SIMABEL Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
