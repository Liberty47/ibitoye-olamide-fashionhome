import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, MessageSquare } from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { BRAND, formatNaira, waLink } from "@/data/atelier";
import { cartTotal, clearCart, markConverted, removeFromCart, updateQty, useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Ibitoye Olamide Fashionhome" },
      {
        name: "description",
        content:
          "Review the ready-to-wear pieces in your cart and check out on WhatsApp with our Benin City atelier.",
      },
      { property: "og:title", content: "Your Cart — Ibitoye Olamide Fashionhome" },
      {
        property: "og:description",
        content: "Review your ready-to-wear pieces and check out on WhatsApp.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const items = useCart();
  const navigate = useNavigate();
  const total = cartTotal(items);
  const delivery = items.length ? 5000 : 0;

  const checkout = () => {
    const message = [
      `Hi ${BRAND.name}, I'd like to place an order:`,
      ...items.map((i) => `• ${i.name} (Size ${i.size}) x${i.qty} — ${formatNaira(i.price * i.qty)}`),
      `Delivery: ${formatNaira(delivery)}`,
      `Total: ${formatNaira(total + delivery)}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener");
    markConverted();
    clearCart();
    navigate({ to: "/request-received", search: { phone: BRAND.whatsappDisplay } });
  };

  return (
    <AppShell>
      <TopBar showPhone />

      <section className="px-4 pt-4">
        <h1 className="font-display text-3xl text-foreground">Your Cart</h1>
        <p className="mt-1 text-xs text-muted-foreground">
          Ready-to-wear pieces, reserved the moment you check out.
        </p>
      </section>

      {items.length === 0 ? (
        <section className="mx-4 mt-6 rounded-2xl border border-border bg-card p-6 text-center">
          <ShoppingBag className="mx-auto size-8 text-primary" />
          <p className="mt-3 text-sm font-semibold text-foreground">Your cart is empty</p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Browse our ready-to-wear collection and add a piece you love.
          </p>
          <Link
            to="/collections"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground"
          >
            Shop Collections
          </Link>
        </section>
      ) : (
        <>
          <section className="mt-4 flex flex-col gap-3 px-4">
            {items.map((i) => (
              <div
                key={`${i.id}-${i.size}`}
                className="flex gap-3 rounded-2xl border border-border bg-card p-3"
              >
                <img
                  src={i.image}
                  alt={i.name}
                  loading="lazy"
                  width={400}
                  height={550}
                  className="h-24 w-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-foreground">{i.name}</p>
                  <p className="text-[10px] text-muted-foreground">Size {i.size}</p>
                  <p className="mt-1 text-xs text-primary">{formatNaira(i.price)}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(i.id, i.size, -1)}
                      >
                        <Minus className="size-3 text-foreground" />
                      </button>
                      <span className="text-xs text-foreground">{i.qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQty(i.id, i.size, 1)}
                      >
                        <Plus className="size-3 text-foreground" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(i.id, i.size)}
                      className="flex items-center gap-1 text-[10px] text-muted-foreground"
                    >
                      <Trash2 className="size-3" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mx-4 mt-5 rounded-2xl border border-border bg-card p-4">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Subtotal</span>
              <span className="text-foreground">{formatNaira(total)}</span>
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>Delivery</span>
              <span className="text-foreground">{formatNaira(delivery)}</span>
            </div>
            <div className="mt-3 flex justify-between border-t border-border pt-3 text-sm font-semibold text-foreground">
              <span>Total</span>
              <span>{formatNaira(total + delivery)}</span>
            </div>
          </section>

          <section className="px-4 py-6">
            <button
              type="button"
              onClick={checkout}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] py-3.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageSquare className="size-4" /> Checkout on WhatsApp
            </button>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              We confirm your order and payment details on WhatsApp.
            </p>
          </section>
        </>
      )}
    </AppShell>
  );
}
