import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { BRAND, waLink } from "@/data/atelier";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Ibitoye Olamide Fashionhome" },
      {
        name: "description",
        content: "Chat with the Ibitoye Olamide Fashionhome team about your custom outfit on WhatsApp.",
      },
      { property: "og:title", content: "Messages — Ibitoye Olamide Fashionhome" },
      {
        property: "og:description",
        content: "Chat with the Ibitoye Olamide Fashionhome team about your custom outfit.",
      },
    ],
  }),
  component: MessagesPage,
});

function MessagesPage() {
  return (
    <AppShell>
      <TopBar showPhone />
      <main className="px-4 py-6">
        <h1 className="font-display text-3xl text-foreground">Messages</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          We reply on WhatsApp, usually within a few hours.
        </p>

        <div className="mt-5 rounded-2xl border border-border bg-card p-4">
          <p className="text-sm font-semibold text-foreground">Ibitoye Olamide Fashionhome</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Hi! Let us know the look you have in mind and we'll guide you from there.
          </p>
          <a
            href={waLink("Hi Ibitoye Olamide Fashionhome, I have a question about my outfit.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageSquare className="size-4" /> Chat on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {BRAND.whatsappDisplay}
          </p>
        </div>
      </main>
    </AppShell>
  );
}
