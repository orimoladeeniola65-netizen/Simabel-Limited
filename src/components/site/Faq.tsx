import * as React from "react";
import { Reveal } from "./Reveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const faqs = [
  {
    q: "Do you handle last-mile delivery after customs clearance?",
    a: "Yes, we handle last-mile delivery for customers upon completion of customs clearance, across the United Kingdom and Europe.",
  },
  {
    q: "What countries do you handle shipments from?",
    a: "We handle procurement and customs clearance for shipments from China, Africa, Europe, the US, and virtually any country into the UK.",
  },
  {
    q: "Do you deliver to my doorstep?",
    a: "Yes, once your cargo clears customs, we deliver it straight to your doorstep, no extra pickup needed.",
  },
  {
    q: "What kind of support can I expect?",
    a: "Direct, responsive support from start to finish; message us on WhatsApp anytime and get a real person, not a bot.",
  },
];

const CustomTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-semibold text-foreground transition-all md:text-lg",
        className,
      )}
      {...props}
    >
      {children}
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent transition-colors duration-200">
        <ChevronDown
          className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180"
          strokeWidth={2.5}
        />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <Reveal className="mt-10 flex flex-col items-center lg:mt-12 lg:items-start">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Frequently Asked Questions
            </span>
            <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-left">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="mt-5 max-w-md text-center text-base leading-relaxed text-muted-foreground lg:text-left">
              Everything you need to know about procurement, customs clearance, and shipping with
              SIMABEL. Still stuck? Message us on WhatsApp.
            </p>
          </Reveal>

          {/* Right column */}
          <Reveal delay={100}>
            <AccordionPrimitive.Root
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full space-y-4"
            >
              {faqs.map((faq, i) => (
                <AccordionPrimitive.Item
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <CustomTrigger>{faq.q}</CustomTrigger>
                  <AccordionPrimitive.Content className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:text-base">
                    <div className="pb-1 pt-2 pr-14">{faq.a}</div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
