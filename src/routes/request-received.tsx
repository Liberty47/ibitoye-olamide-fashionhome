import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarPlus,
  CheckCircle2,
  MessageSquare,
  Package,
  Ruler,
  Scissors,
  Sparkles,
} from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { BRAND, categories, waLink } from "@/data/atelier";
import bag from "@/assets/thank-you-bag.jpg";
import clientAvatar from "@/assets/client-blessing.jpg";

export const Route = createFileRoute("/request-received")({
  validateSearch: (search: Record<string, unknown>) => ({
    phone: typeof search["phone"] === "string" ? (search["phone"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Request Received — Vanessa Atelier" },
      {
        name: "description",
        content:
          "Thank you for choosing Vanessa Atelier. We'll reach out on WhatsApp to discuss your look and next steps.",
      },
      { property: "og:title", content: "Request Received — Vanessa Atelier" },
      {
        property: "og:description",
        content: "We've received your request and will reach out on WhatsApp shortly.",
      },
    ],
  }),
  component: RequestReceivedPage,
});

const nextSteps = [
  { n: 1, icon: MessageSquare, title: "We contact you", sub: "We'll reach out on WhatsApp to talk about your idea" },
  { n: 2, icon: Sparkles, title: "Design discussion", sub: "We discuss your style, fabric and details" },
  { n: 3, icon: Ruler, title: "Measurements", sub: "We take accurate measurements for the perfect fit" },
  { n: 4, icon: Scissors, title: "Your outfit is made", sub: "Carefully crafted by our expert team" },
  { n: 5, icon: Package, title: "Fitting & delivery", sub: "Final fitting if needed, then delivered right to you" },
];

function RequestReceivedPage() {
  const { phone } = Route.useSearch();

  return (
    <AppShell>
      <TopBar showPhone />

      <section className="relative mx-4 mt-4 overflow-hidden rounded-3xl border border-border">
        <img
          src={bag}
          alt="Vanessa Atelier gift bag with a thank you card"
          width={928}
          height={720}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative bg-gradient-to-r from-card via-card/90 to-card/10 p-5">
          <span className="flex size-9 items-center justify-center rounded-full border border-primary/40 bg-background">
            <CheckCircle2 className="size-5 text-[var(--whatsapp)]" />
          </span>
          <h1 className="mt-4 max-w-[13rem] font-display text-3xl leading-tight text-foreground">
            We've received your request!
          </h1>
          <p className="mt-3 max-w-[15rem] text-[11px] leading-relaxed text-muted-foreground">
            Thank you for choosing {BRAND.name}. We'll personally reach out to you on{" "}
            <span className="font-semibold text-[var(--whatsapp)]">WhatsApp</span> to discuss your
            look and the next steps.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-background/90 px-3 py-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-[var(--whatsapp)]/15">
              <MessageSquare className="size-3.5 text-[var(--whatsapp)]" />
            </span>
            <span className="text-[11px] leading-tight text-muted-foreground">
              We'll contact you on
              <br />
              <span className="text-sm font-semibold text-foreground">
                {phone ?? BRAND.whatsappDisplay}
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-4 mt-4 rounded-2xl border border-border bg-card p-4">
        <h2 className="font-display text-xl text-foreground">What happens next?</h2>
        <p className="text-[11px] text-muted-foreground">
          Here's what you can expect after you submit your request.
        </p>
        <div className="mt-4 flex justify-between gap-1">
          {nextSteps.map(({ n, icon: Icon, title, sub }) => (
            <div key={n} className="flex-1 text-center">
              <span className="mx-auto flex size-9 items-center justify-center rounded-full bg-accent">
                <Icon className="size-4 text-primary" />
              </span>
              <p className="mt-1 text-[9px] text-primary">{n}</p>
              <p className="text-[9px] font-semibold leading-tight text-foreground">{title}</p>
              <p className="text-[8px] leading-tight text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl bg-accent/40 p-3">
          <img
            src={clientAvatar}
            alt="Vanessa, lead designer"
            loading="lazy"
            width={512}
            height={512}
            className="size-11 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-xs font-semibold text-foreground">
              We can't wait to bring your vision to life!
            </p>
            <p className="text-[10px] leading-tight text-muted-foreground">
              Every piece we create is made with passion, precision and personal attention.
            </p>
          </div>
          <span className="font-display text-lg text-primary">Thank you!</span>
        </div>
      </section>

      <section className="mx-4 mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-[var(--whatsapp)]/15">
          <MessageSquare className="size-4 text-[var(--whatsapp)]" />
        </span>
        <div className="flex-1">
          <p className="text-xs font-semibold text-foreground">Need immediate help?</p>
          <p className="text-[10px] text-muted-foreground">
            Chat with us directly on WhatsApp. We're online and ready to help.
          </p>
        </div>
        <a
          href={waLink("Hi Vanessa Atelier, I just sent a request and I need help.")}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-[11px] font-semibold text-primary-foreground"
        >
          Chat on WhatsApp
        </a>
      </section>

      <section className="mt-6 px-4">
        <h2 className="text-sm font-semibold text-foreground">Keep exploring</h2>
        <p className="text-[11px] text-muted-foreground">You might love these</p>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {categories.slice(0, 5).map((c) => (
            <Link
              key={c.label}
              to="/collections"
              className="w-28 shrink-0 overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                width={800}
                height={1100}
                className="h-24 w-full object-cover"
              />
              <div className="p-2">
                <p className="text-[11px] font-medium text-foreground">{c.label}</p>
                <p className="flex items-center gap-1 text-[9px] text-muted-foreground">
                  Explore collection <ArrowRight className="size-2.5" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-4 my-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent">
          <CalendarPlus className="size-4 text-primary" />
        </span>
        <div className="flex-1">
          <p className="text-xs font-semibold text-foreground">Have another idea?</p>
          <p className="text-[10px] text-muted-foreground">Create a new request anytime.</p>
        </div>
        <Link
          to="/create-my-look" search={{ design: undefined }}
          className="shrink-0 rounded-full border border-primary px-4 py-2.5 text-[11px] font-semibold text-primary"
        >
          Create Another Request →
        </Link>
      </section>
    </AppShell>
  );
}
