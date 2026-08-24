import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Heart, MapPin, Phone, ShieldCheck, ShoppingBag } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { BRAND } from "@/data/atelier";

type Props = {
  variant?: "home" | "inner";
  showWishlist?: boolean;
  showPhone?: boolean;
  cartCount?: number;
};

export function TopBar({
  variant = "inner",
  showWishlist = false,
  showPhone = false,
  cartCount = 2,
}: Props) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-4 py-3 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {variant === "inner" && (
            <button
              type="button"
              aria-label="Go back"
              onClick={() => router.history.back()}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card"
            >
              <ArrowLeft className="size-4 text-foreground" />
            </button>
          )}
          <Wordmark />
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] leading-tight text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            <span>
              {BRAND.city},<br />
              <span className="font-medium text-foreground">{BRAND.country}</span>
            </span>
          </span>

          {variant === "home" ? (
            <span className="hidden items-center gap-1 rounded-full border border-border px-2 py-1 text-[10px] text-muted-foreground xs:flex">
              <ShieldCheck className="size-3.5 text-primary" />
              {BRAND.clients}+ Clients
            </span>
          ) : null}

          {showPhone && (
            <a
              href={`tel:+${BRAND.whatsapp}`}
              aria-label="Call the atelier"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card"
            >
              <Phone className="size-4 text-foreground" />
            </a>
          )}

          {showWishlist && (
            <button
              type="button"
              aria-label="Wishlist"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card"
            >
              <Heart className="size-4 text-foreground" />
            </button>
          )}

          <Link
            to="/collections"
            aria-label="Bag"
            className="relative flex size-9 items-center justify-center rounded-full border border-border bg-card"
          >
            <ShoppingBag className="size-4 text-foreground" />
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-semibold text-primary-foreground">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
