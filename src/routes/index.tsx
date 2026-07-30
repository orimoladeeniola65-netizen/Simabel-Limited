import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { ValueProps } from "@/components/site/ValueProps";
import { HowItWorks } from "@/components/site/HowItWorks";
import { CountriesMarquee } from "@/components/site/CountriesMarquee";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    links: [
      {
        rel: "preload",
        href: "/videos/hero-bg.mp4",
        as: "video",
        type: "video/mp4",
        fetchPriority: "high",
      },
    ],
    meta: [
      { title: "SIMABEL Limited — Nigeria–UK Air Cargo & Procurement" },
      {
        name: "description",
        content:
          "SIMABEL Limited handles cross-border procurement and air freight between Nigeria and the UK with reliable, transparent, end-to-end service.",
      },
      {
        property: "og:title",
        content: "SIMABEL Limited — Your Trusted Air Cargo Link Between Nigeria and the UK",
      },
      {
        property: "og:description",
        content: "Cross-border procurement and air freight between Africa and the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <ValueProps />
      <HowItWorks />
      <CountriesMarquee />
      <About />
      <Testimonials />
      <CtaBanner />
      <Faq />
      <Footer />
    </main>
  );
}
