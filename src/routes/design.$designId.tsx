import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Diamond,
  MessageSquare,
  Play,
  Ruler,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import {
  clientPhotos,
  designs,
  formatNaira,
  testimonials,
  waLink,
} from "@/data/atelier";
import clientAvatar from "@/assets/client-blessing.jpg";

export const Route = createFileRoute("/design/$designId")({
  loader: ({ params }) => {
    const design = designs.find((d) => d.id === params.designId);
    if (!design) throw notFound();
    return { design };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Design not found — Vanessa Atelier" }, { name: "robots", content: "noindex" }],
      };
    }
    const { design } = loaderData;
    const title = `${design.name} — Vanessa Atelier`;
    return {
      meta: [
        { title },
        { name: "description", content: design.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: design.blurb },
      ],
    };
  },
  component: DesignPage,
});

const whyLove = [
  { icon: Sparkles, title: "Flattering Fit", sub: "Designed to perfect your shape" },
  { icon: Scissors, title: "Premium Fabrics", sub: "High quality, soft & durable" },
  { icon: Ruler, title: "Made-to-Measure", sub: "Created to fit you perfectly" },
  { icon: Diamond, title: "Luxury Finish", sub: "Fine details for a luxurious look" },
];

const steps = [
  { n: 1, title: "You send your request", sub: "Tell us what you want and your preferences" },
  { n: 2, title: "We contact you", sub: "We reach out on WhatsApp to discuss" },
  { n: 3, title: "Measurements", sub: "We take your measurements" },
  { n: 4, title: "Your outfit is made", sub: "We craft your outfit with care" },
  { n: 5, title: "Final fitting & delivery", sub: "We deliver and ensure it fits perfectly" },
];

function DesignPage() {
  const { design } = Route.useLoaderData();
  const testimonial = testimonials[1]!;

  return (
    <AppShell>
      <TopBar showWishlist />

      <section className="grid h-96 grid-cols-[2fr_1fr] gap-2 p-3">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={design.image}
            alt={design.name}
            width={800}
            height={1100}
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-card/90 py-1.5 pl-1.5 pr-3 text-[11px] text-foreground">
            <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-background">
              <Play className="size-3 fill-current" />
            </span>
            Watch Full Look
          </span>
        </div>
        <div className="grid min-h-0 grid-rows-3 gap-2 overflow-hidden">
          {clientPhotos.map((p, i) => (
            <div key={i} className="relative min-h-0 overflow-hidden rounded-xl">
              <img
                src={p}
                alt={`${design.name} detail ${i + 1}`}
                loading="lazy"
                width={800}
                height={1100}
                className="size-full object-cover"
              />
              {i === 2 && (
                <span className="absolute inset-0 flex items-center justify-center bg-foreground/50 text-sm font-medium text-background">
                  +8
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-display text-3xl text-foreground">{design.name}</h1>
          {design.madeToOrder && (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] text-primary">
              Custom Made
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{design.blurb}</p>

        <div className="mt-4 flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">From</p>
            <p className="font-display text-2xl text-foreground">{formatNaira(design.price)}</p>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Scissors className="size-4 text-primary" />
            <span>
              Custom Made
              <br />
              Just for you
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Clock className="size-4 text-primary" />
            <span>
              {design.days}
              <br />
              Production Time
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[1.4fr_1fr] gap-4 px-4 py-4">
        <div>
          <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">
            About this design
          </h2>
          <p className="mt-2 text-[11px] leading-relaxed text-foreground">{design.about}</p>
        </div>
        <div>
          <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Fabric & color
          </h2>
          <div className="mt-2 flex gap-2">
            {design.colors.map((c) => (
              <span
                key={c}
                className="size-7 rounded-full border border-border"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">More colors available</p>
        </div>
      </section>

      <section className="border-y border-border px-4 py-4">
        <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Why you'll love it
        </h2>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {whyLove.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto size-5 text-primary" />
              <p className="mt-1.5 text-[10px] font-semibold text-foreground">{title}</p>
              <p className="text-[9px] leading-tight text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 px-4 py-4">
        <div>
          <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">
            See it on real clients
          </h2>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {clientPhotos.map((p, i) => (
              <img
                key={i}
                src={p}
                alt={`Client wearing ${design.name}`}
                loading="lazy"
                width={800}
                height={1100}
                className="h-24 w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3">
          <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">
            What our clients say
          </h2>
          <div className="mt-2 flex items-center gap-2">
            <img
              src={clientAvatar}
              alt={testimonial.name}
              loading="lazy"
              width={512}
              height={512}
              className="size-8 rounded-full object-cover"
            />
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-foreground">"{testimonial.quote}"</p>
          <p className="mt-2 text-[11px] text-muted-foreground">– {testimonial.name}</p>
        </div>
      </section>

      <section className="border-y border-border px-4 py-5">
        <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">How it works</h2>
        <div className="mt-4 flex justify-between gap-1">
          {steps.map((s) => (
            <div key={s.n} className="flex-1 text-center">
              <span className="mx-auto flex size-8 items-center justify-center rounded-full border border-primary/40 bg-accent text-[11px] text-primary">
                {s.n}
              </span>
              <p className="mt-2 text-[9px] font-semibold leading-tight text-foreground">
                {s.title}
              </p>
              <p className="text-[8px] leading-tight text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-6">
        <h2 className="font-display text-2xl leading-snug text-foreground">
          Ready to create your
          <br />
          perfect look?
        </h2>
        <div className="mt-4 flex flex-col gap-2">
          <Link
            to="/create-my-look"
            search={{ design: design.id }}
            className="flex items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-sm font-semibold text-background"
          >
            Create My Look <ArrowRight className="size-4" />
          </Link>
          <a
            href={waLink(`Hi Vanessa Atelier, I'm interested in ${design.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[var(--whatsapp)] py-3.5 text-sm font-semibold text-[var(--whatsapp)]"
          >
            <MessageSquare className="size-4" /> Chat on WhatsApp
          </a>
          <p className="text-center text-[11px] text-muted-foreground">We're here to help you</p>
        </div>
      </section>
    </AppShell>
  );
}
