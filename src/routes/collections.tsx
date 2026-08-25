import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  Heart,
  LayoutGrid,
  PackageCheck,
  PackageX,
  Play,
  Scissors,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Truck,
  UserRound,
} from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { products, formatNaira, heroImage } from "@/data/atelier";


export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Dresses & Collections — Ibitoye Olamide Fashionhome" },
      {
        name: "description",
        content:
          "Browse custom-made dresses, native wear, bridal and corporate looks crafted to fit you perfectly in Benin City, Nigeria.",
      },
      { property: "og:title", content: "Dresses & Collections — Ibitoye Olamide Fashionhome" },
      {
        property: "og:description",
        content: "Custom-made dresses crafted to fit you perfectly and tell your story.",
      },
    ],
  }),
  component: CollectionsPage,
});

const filters = ["All Dresses", "Midi", "Maxi", "Short", "Evening"] as const;

const trust = [
  { icon: Sparkles, title: "100%", sub: "Made-to-Measure Just For You" },
  { icon: Scissors, title: "Premium Fabrics", sub: "Carefully sourced for luxury & comfort" },
  { icon: Truck, title: "On-Time Delivery", sub: "Your time is important to us" },
  { icon: UserRound, title: "Personal Support", sub: "We're here to help you every step" },
];

function CollectionsPage() {
  const [active, setActive] = useState<string>("All Dresses");

  const list = products.filter((d) => active === "All Dresses" || d.fit === active);

  return (
    <AppShell>
      <TopBar />

      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Atelier fitting room with a beaded gown"
          width={1200}
          height={912}
          className="absolute inset-0 size-full object-cover opacity-90"
        />
        <div className="relative bg-gradient-to-r from-background via-background/85 to-background/10 px-4 py-8">
          <h1 className="font-display text-4xl uppercase tracking-wide text-foreground">Dresses</h1>
          <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
            Custom-made dresses crafted to fit you perfectly and tell your story.
          </p>
          <button
            type="button"
            className="mt-4 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs text-foreground"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="size-2.5 fill-current" />
            </span>
            Watch Collection Story
          </button>
        </div>
      </section>

      <div className="flex gap-2 overflow-x-auto px-4 py-4">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs ${
              active === f
                ? "border-primary bg-accent text-foreground"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            {f === "All Dresses" && <LayoutGrid className="size-3.5" />}
            {f}
          </button>
        ))}
        <button
          type="button"
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-primary bg-card px-3.5 py-2 text-xs text-primary"
        >
          <SlidersHorizontal className="size-3.5" /> Filter
        </button>
      </div>

      <div className="flex items-center justify-between px-4">
        <p className="text-xs text-muted-foreground">{list.length} Designs</p>
        <button type="button" className="flex items-center gap-1 text-xs text-foreground">
          Sort by: <span className="font-medium">Popular</span>
          <ChevronDown className="size-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 py-4">
        {list.map((d) => (
          <div key={d.id} className="overflow-hidden rounded-2xl border border-border bg-card">
            <Link to="/product/$productId" params={{ productId: d.id }} className="relative block">
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                width={800}
                height={1100}
                className="h-44 w-full object-cover"
              />
              <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-card/85">
                <Heart className="size-3.5 text-foreground" />
              </span>
              <span
                className={`absolute left-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  d.inStock
                    ? "bg-[var(--whatsapp)] text-primary-foreground"
                    : "bg-foreground/70 text-background"
                }`}
              >
                {d.inStock ? <PackageCheck className="size-2.5" /> : <PackageX className="size-2.5" />}
                {d.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </Link>
            <div className="p-3">
              <Link to="/product/$productId" params={{ productId: d.id }}>
                <h2 className="text-[13px] font-medium text-foreground">{d.name}</h2>
                <p className="mt-1 text-xs text-primary">{formatNaira(d.price)}</p>
                <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                  {d.blurb}
                </p>
              </Link>

              <div className="mt-3 flex flex-col gap-1.5">
                {d.inStock ? (
                  <Link
                    to="/product/$productId"
                    params={{ productId: d.id }}
                    className="flex items-center justify-center gap-1 rounded-full bg-foreground py-2 text-[11px] font-semibold text-background"
                  >
                    <ShoppingBag className="size-3" /> Buy Now
                  </Link>
                ) : (
                  <span className="flex items-center justify-center gap-1 rounded-full bg-muted py-2 text-[11px] font-semibold text-muted-foreground">
                    <PackageX className="size-3" /> Out of Stock
                  </span>
                )}
                <Link
                  to="/create-my-look"
                  search={{ design: d.id }}
                  className="flex items-center justify-center gap-1 rounded-full border border-primary py-2 text-[11px] font-semibold text-primary"
                >
                  <Scissors className="size-3" /> Create Similar Design
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="mx-4 mb-6 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4">
        {trust.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
              <Icon className="size-4 text-primary" />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-foreground">{title}</p>
              <p className="text-[10px] leading-snug text-muted-foreground">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
