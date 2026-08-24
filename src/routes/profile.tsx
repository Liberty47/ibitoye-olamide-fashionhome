import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Heart, Package, Ruler, Settings } from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { BRAND } from "@/data/atelier";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile — Vanessa Atelier" },
      {
        name: "description",
        content: "Your saved looks, measurements and requests with Vanessa Atelier.",
      },
      { property: "og:title", content: "Your Profile — Vanessa Atelier" },
      {
        property: "og:description",
        content: "Your saved looks, measurements and requests with Vanessa Atelier.",
      },
    ],
  }),
  component: ProfilePage,
});

const rows = [
  { icon: Heart, label: "Saved looks" },
  { icon: Package, label: "My requests" },
  { icon: Ruler, label: "My measurements" },
  { icon: Settings, label: "Preferences" },
];

function ProfilePage() {
  return (
    <AppShell>
      <TopBar />
      <main className="px-4 py-6">
        <h1 className="font-display text-3xl text-foreground">Profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Everything about your journey with {BRAND.name}.
        </p>

        <div className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {rows.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-3 px-4 py-4 text-left"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-accent">
                <Icon className="size-4 text-primary" />
              </span>
              <span className="flex-1 text-sm text-foreground">{label}</span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        <Link
          to="/create-my-look"
          className="mt-6 flex w-full items-center justify-center rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
        >
          Create My Look
        </Link>
      </main>
    </AppShell>
  );
}
