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
      { title: "SIMABEL Limited — Global Procurement & UK Customs Brokerage" },
      {
        name: "description",
        content:
          "SIMABEL Limited handles global procurement and customs clearance for shipments from Africa, China, Europe, the US, and anywhere in the world into the UK.",
      },
      {
        property: "og:title",
        content: "SIMABEL Limited — Your Global Partner for Procurement and UK Customs",
      },
      {
        property: "og:description",
        content:
          "Global procurement and customs clearance for shipments from anywhere in the world into the UK.",
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
