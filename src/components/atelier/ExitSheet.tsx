import { useEffect, useState } from "react";
import { Hand, MessageSquare, X, Sparkles } from "lucide-react";
import { BRAND, waLink } from "@/data/atelier";

const reasons = [
  { id: "style", label: "I couldn't find the style I wanted", icon: "👗" },
  { id: "custom", label: "I need a custom design", icon: "🧵" },
  { id: "price", label: "I want to know the price", icon: "🏷️" },
  { id: "fabric", label: "I have a specific fabric/design", icon: "📒" },
  { id: "occasion", label: "I need something for a specific occasion", icon: "📅" },
  { id: "urgent", label: "I need something urgently", icon: "⏱️" },
  { id: "other", label: "I have another question", icon: "…" },
];

const messages: Record<string, string> = {
  style:
    "Hi, I visited your website and I couldn't find the particular style I was looking for. I'd like to ask if you can help me with it.",
  custom: "Hi, I visited your website and I'd like to discuss a custom design I have in mind.",
  price: "Hi, I visited your website and I'd like to know the price for one of your designs.",
  fabric: "Hi, I visited your website. I have a specific fabric/design I'd like made for me.",
  occasion: "Hi, I visited your website. I need an outfit for a specific occasion coming up.",
  urgent: "Hi, I visited your website. I need an outfit urgently — can you help?",
  other: "Hi, I visited your website and I have a question I'd like to ask.",
};

export function ExitSheet() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("style");
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        setShown(true);
        setOpen(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [shown]);

  if (!open) return null;

  const message =
    messages[reason] ?? "Hi, I visited your website and I have a question I'd like to ask.";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 px-0">
      <div className="mx-auto max-h-[92vh] w-full max-w-[480px] overflow-y-auto rounded-t-3xl bg-card px-5 pb-28 pt-3">
        <div className="mx-auto h-1 w-10 rounded-full bg-border" />
        <div className="mt-4 flex items-start justify-between">
          <span className="flex size-10 items-center justify-center rounded-full bg-accent">
            <Hand className="size-5 text-primary" />
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="p-1 text-muted-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <h2 className="mt-4 flex items-center gap-2 font-display text-3xl text-foreground">
          Leaving so soon? <Sparkles className="size-5 text-primary" />
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We'd love to help you find exactly what you're looking for.
        </p>

        <h3 className="mt-6 text-sm font-semibold text-foreground">
          What were you looking for today?
        </h3>
        <p className="text-xs text-muted-foreground">This helps us assist you better.</p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {reasons.map((r, i) => (
            <button
              type="button"
              key={r.id}
              onClick={() => setReason(r.id)}
              className={`flex items-center gap-2 rounded-xl border p-3 text-left text-xs ${
                reason === r.id ? "border-primary bg-accent/60" : "border-border bg-background"
              } ${i === reasons.length - 1 ? "col-span-2" : ""}`}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-sm">
                {r.icon}
              </span>
              <span className="flex-1 text-foreground">{r.label}</span>
              <span
                className={`size-3.5 rounded-full border ${
                  reason === r.id ? "border-primary bg-primary" : "border-border"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-background p-4">
          <div className="flex gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-[var(--whatsapp)] text-primary-foreground">
              <MessageSquare className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Chat with us on WhatsApp</p>
              <p className="text-xs text-muted-foreground">
                Tell us more about what you need, and we'll personally assist you.
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-border p-3">
            <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <MessageSquare className="size-3.5" /> Your message will include:
            </p>
            <p className="mt-2 rounded-lg bg-muted p-3 text-xs text-foreground">
              {messages[reason]}
              <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                11:30 AM
              </span>
            </p>
          </div>
        </div>

        <a
          href={waLink(messages[reason])}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] py-3.5 text-sm font-semibold text-primary-foreground"
        >
          <MessageSquare className="size-4" /> Chat on WhatsApp →
        </a>
        <p className="mt-3 text-center text-[11px] text-muted-foreground">
          🔒 We respect your privacy. Your information is safe with us. ({BRAND.name})
        </p>
      </div>
    </div>
  );
}
