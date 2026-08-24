import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  ChevronRight,
  Clock,
  Heart,
  Instagram,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import {
  BRAND,
  categories,
  clientPhotos,
  formatNaira,
  heroImage,
  readyToWear,
  reels,
  testimonials,
} from "@/data/atelier";
import clientAvatar from "@/assets/client-blessing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanessa Atelier — Custom Made Fashion in Benin City" },
      {
        name: "description",
        content:
          "Made for the woman who knows what she wants. Custom-made dresses, native wear and bridal, tailored to your measurements in Benin City, Nigeria.",
      },
      { property: "og:title", content: "Vanessa Atelier — Custom Made Fashion in Benin City" },
      {
        property: "og:description",
        content:
          "Custom-made dresses, native wear and bridal, tailored to your measurements in Benin City, Nigeria.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Award, title: `${BRAND.clients}+`, sub: "Outfits Created With Love" },
  { icon: MapPin, title: BRAND.city, sub: "Proudly Based in Nigeria" },
  { icon: Sparkles, title: "100%", sub: "Made to Measure Just For You" },
  { icon: Clock, title: "7-14 Days", sub: "Production Time (On Average)" },
];

function Index() {
  const testimonial = testimonials[0]!;

  return (
    <AppShell>
      <TopBar variant="home" />

      <section className="px-3 pt-3">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={heroImage}
            alt="Designer fitting a beaded couture gown in the Vanessa Atelier studio"
            width={1200}
            height={912}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4">
            <h1 className="max-w-[13rem] font-display text-2xl leading-tight text-background">
              Made for the woman who <em className="text-primary">knows what</em> she wants.
            </h1>
            <button
              type="button"
              className="mt-3 flex items-center gap-2 rounded-full bg-background/95 px-3 py-2 text-[11px] font-medium text-foreground"
            >
              Watch Our Story
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-2.5 fill-current" />
              </span>
            </button>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex -space-x-2">
                {clientPhotos.map((p, i) => (
                  <img
                    key={i}
                    src={p}
                    alt=""
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="size-6 rounded-full border border-background object-cover"
                  />
                ))}
              </div>
              <p className="text-[10px] leading-tight text-background">
                {BRAND.clients}+ Happy Clients
                <br />
                and counting
              </p>
            </div>
          </div>

          <div className="absolute right-3 top-4 flex flex-col items-center gap-3 text-background">
            <span className="flex flex-col items-center text-[9px]">
              <Heart className="size-4" />
              256
            </span>
            <span className="flex flex-col items-center text-[9px]">
              <MessageCircle className="size-4" />
              38
            </span>
            <span className="flex flex-col items-center text-[9px]">
              <Send className="size-4" />
              Share
            </span>
          </div>
          <span className="absolute bottom-4 right-4 text-[10px] text-background/80">01 / 05</span>
        </div>
      </section>

      <section className="py-6">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          — What are you looking for? —
        </p>
        <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {categories.map((c) => (
            <Link
              key={c.label}
              to="/collections"
              className="flex w-16 shrink-0 flex-col items-center gap-1.5"
            >
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                width={800}
                height={1100}
                className="size-16 rounded-full border border-border object-cover"
              />
              <span className="text-center text-[9px] leading-tight text-muted-foreground">
                {c.label}
              </span>
            </Link>
          ))}
          <Link to="/collections" className="flex w-16 shrink-0 flex-col items-center gap-1.5">
            <span className="flex size-16 items-center justify-center rounded-full border border-border bg-card">
              <LayoutGrid className="size-5 text-primary" />
            </span>
            <span className="text-[9px] text-muted-foreground">More</span>
          </Link>
        </div>
      </section>

      <section className="px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Behind the scenes & more
          </h2>
          <span className="flex items-center gap-0.5 text-[11px] text-primary">
            See all <ChevronRight className="size-3" />
          </span>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {reels.map((r) => (
            <div
              key={r.caption}
              className="relative h-44 w-32 shrink-0 overflow-hidden rounded-xl border border-border"
            >
              <img
                src={r.image}
                alt={r.caption}
                loading="lazy"
                width={700}
                height={900}
                className="size-full object-cover"
              />
              <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-foreground/70 px-1.5 py-0.5 text-[9px] text-background">
                <Play className="size-2 fill-current" /> {r.views}
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-2 text-[9px] leading-tight text-background">
                {r.caption}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-4 mt-4 grid grid-cols-4 gap-2 rounded-2xl border border-border bg-card p-3">
        {stats.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="text-center">
            <Icon className="mx-auto size-4 text-primary" />
            <p className="mt-1 text-[11px] font-semibold text-foreground">{title}</p>
            <p className="text-[8px] leading-tight text-muted-foreground">{sub}</p>
          </div>
        ))}
      </section>

      <section className="mt-5 grid grid-cols-2 gap-3 px-4">
        <div className="rounded-2xl border border-border bg-card p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-[10px] uppercase tracking-wide text-muted-foreground">
              What our clients say
            </h2>
            <span className="text-[10px] text-primary">See all</span>
          </div>
          <img
            src={clientAvatar}
            alt={testimonial.name}
            loading="lazy"
            width={512}
            height={512}
            className="mt-3 size-9 rounded-full object-cover"
          />
          <div className="mt-2 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3 fill-primary text-primary" />
            ))}
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-foreground">"{testimonial.quote}"</p>
          <p className="mt-2 text-[10px] text-muted-foreground">– {testimonial.name}</p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[10px] uppercase tracking-wide text-muted-foreground">
              Ready to wear
            </h2>
            <Link to="/collections" className="text-[10px] text-primary">
              See all
            </Link>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {readyToWear.map((r) => (
              <Link
                key={r.id}
                to="/collections"
                className="w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  width={700}
                  height={900}
                  className="h-24 w-full object-cover"
                />
                <div className="p-1.5">
                  <p className="text-[9px] leading-tight text-foreground">{r.name}</p>
                  <p className="text-[9px] text-primary">{formatNaira(r.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 mt-5 flex items-center gap-3 rounded-2xl border border-border bg-accent/40 p-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-card">
          <Instagram className="size-4 text-primary" />
        </span>
        <div className="flex-1">
          <p className="text-[11px] font-medium text-foreground">Follow our journey on Instagram</p>
          <p className="text-[10px] text-muted-foreground">{BRAND.instagram}</p>
        </div>
        <div className="hidden gap-1 sm:flex">
          {clientPhotos.map((p, i) => (
            <img
              key={i}
              src={p}
              alt=""
              loading="lazy"
              width={800}
              height={1100}
              className="size-9 rounded-md object-cover"
            />
          ))}
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] text-foreground"
        >
          Follow Us
        </a>
      </section>

      <section className="mx-4 my-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent">
          <Users className="size-6 text-primary" />
        </span>
        <div className="flex-1">
          <h2 className="font-display text-xl leading-tight text-foreground">
            Ready to create your perfect look?
          </h2>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Let's bring your dream outfit to life.
          </p>
          <Link
            to="/create-my-look"
            search={{ design: undefined }}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-xs font-semibold text-primary-foreground"
          >
            Create My Look <ArrowRight className="size-3.5" />
          </Link>
          <p className="mt-2 text-center text-[9px] text-muted-foreground">
            🔒 Secure · Simple · Personal
          </p>
        </div>
      </section>
    </AppShell>
  );
}
