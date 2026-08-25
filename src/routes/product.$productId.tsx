import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  MessageSquare,
  PackageCheck,
  PackageX,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { clientPhotos, formatNaira, products, testimonials, waLink } from "@/data/atelier";
import { addToCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Ibitoye Olamide Fashionhome" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Buy Ready to Wear | Ibitoye Olamide Fashionhome`;
    return {
      meta: [
        { title },
        { name: "description", content: product.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: product.blurb },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const navigate = useNavigate();
  const [size, setSize] = useState(product.sizes[0] ?? "M");
  const [added, setAdded] = useState(false);
  const testimonial = testimonials[0]!;

  const add = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
    });
    setAdded(true);
  };

  return (
    <AppShell>
      <TopBar showWishlist />

      <section className="px-4 pt-3">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={1100}
            className="h-80 w-full object-cover"
          />
          <span
            className={`absolute left-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
              product.inStock
                ? "bg-[var(--whatsapp)] text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {product.inStock ? <PackageCheck className="size-3" /> : <PackageX className="size-3" />}
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {clientPhotos.map((p, i) => (
            <img
              key={i}
              src={p}
              alt={`${product.name} styled ${i + 1}`}
              loading="lazy"
              width={800}
              height={1100}
              className="h-20 w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </section>

      <section className="px-4 pt-4">
        <h1 className="font-display text-3xl text-foreground">{product.name}</h1>
        <p className="mt-1 text-xs text-muted-foreground">{product.blurb}</p>
        <p className="mt-3 font-display text-2xl text-foreground">{formatNaira(product.price)}</p>

        <div className="mt-4">
          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Select size</p>
          <div className="mt-2 flex gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`size-10 rounded-full border text-xs ${
                  size === s
                    ? "border-primary bg-accent text-foreground"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border bg-card p-3 text-[11px] text-muted-foreground">
          <Truck className="size-4 text-primary" />
          Delivery within 2 – 4 days across Nigeria. Pay on WhatsApp at checkout.
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-border bg-card p-4 mx-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 fill-primary text-primary" />
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-foreground">"{testimonial.quote}"</p>
        <p className="mt-1 text-[11px] text-muted-foreground">– {testimonial.name}</p>
      </section>

      <section className="px-4 py-6">
        <div className="flex flex-col gap-2">
          {product.inStock ? (
            <>
              <button
                type="button"
                onClick={add}
                className="flex items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-sm font-semibold text-background"
              >
                {added ? <Check className="size-4" /> : <ShoppingBag className="size-4" />}
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                type="button"
                onClick={() => {
                  add();
                  navigate({ to: "/cart" });
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Buy Now <ArrowRight className="size-4" />
              </button>
            </>
          ) : (
            <span className="flex items-center justify-center gap-2 rounded-full bg-muted py-3.5 text-sm font-semibold text-muted-foreground">
              <PackageX className="size-4" /> Out of Stock
            </span>
          )}

          <Link
            to="/create-my-look"
            search={{ design: product.id }}
            className="flex items-center justify-center gap-2 rounded-full border border-primary py-3.5 text-sm font-semibold text-primary"
          >
            Create Similar Design <ArrowRight className="size-4" />
          </Link>

          <a
            href={waLink(`Hi Ibitoye Olamide Fashionhome, I'm interested in ${product.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[var(--whatsapp)] py-3.5 text-sm font-semibold text-[var(--whatsapp)]"
          >
            <MessageSquare className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </AppShell>
  );
}
