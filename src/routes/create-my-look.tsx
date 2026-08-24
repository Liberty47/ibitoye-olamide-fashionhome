import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  CalendarDays,
  Gift,
  ShoppingBag,

  MapPin,
  MessageSquare,
  Plus,
  Send,
  ShieldCheck,
  Shirt,
  Spool,
  Upload,
  UserRound,
} from "lucide-react";
import { AppShell } from "@/components/atelier/AppShell";
import { TopBar } from "@/components/atelier/TopBar";
import { BRAND, clientPhotos, designs, waLink } from "@/data/atelier";
import clientAvatar from "@/assets/client-blessing.jpg";

export const Route = createFileRoute("/create-my-look")({
  validateSearch: (search: Record<string, unknown>) => ({
    design: typeof search["design"] === "string" ? (search["design"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Create My Look — Ibitoye Olamide Fashionhome" },
      {
        name: "description",
        content:
          "Tell us about your dream outfit and our Benin City atelier will bring it to life, made to your measurements.",
      },
      { property: "og:title", content: "Create My Look — Ibitoye Olamide Fashionhome" },
      {
        property: "og:description",
        content: "Tell us about your dream outfit and we'll bring it to life.",
      },
    ],
  }),
  component: CreateMyLookPage,
});

const stepLabels = ["Tell Us", "Your Details", "Inspiration", "Review & Send"];

const requestTypes = [
  { id: "exact", icon: Shirt, title: "This Design", sub: "I want this exact design" },
  { id: "similar", icon: UserRound, title: "Something Similar", sub: "I like the style but want changes" },
  { id: "custom", icon: Spool, title: "Custom Design", sub: "I have my own idea in mind" },
  { id: "rtw", icon: ShoppingBag, title: "Ready-to-Wear", sub: "I want to buy from what's available" },
];

function CreateMyLookPage() {
  const { design } = Route.useSearch();
  const navigate = useNavigate();

  const [designId, setDesignId] = useState<string | undefined>(design);
  const selectedDesign = designs.find((d) => d.id === designId);

  const [type, setType] = useState(design ? "exact" : "custom");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("WhatsApp");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Benin City, Nigeria");
  const [notes, setNotes] = useState("");

  const step = name && phone ? (notes ? 4 : 3) : 1;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const chosen = requestTypes.find((t) => t.id === type)?.title ?? "Custom Design";
    const message = [
      `Hi ${BRAND.name}, I'd like to create my look.`,
      `Request type: ${chosen}`,
      selectedDesign ? `Design: ${selectedDesign.name}` : null,
      `Name: ${name}`,
      `WhatsApp: ${phone}`,
      `Preferred contact: ${contact}`,
      occasion ? `Occasion: ${occasion}` : null,
      date ? `Date needed: ${date}` : null,
      `Delivery: ${location}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener");
    navigate({ to: "/request-received", search: { phone: phone || BRAND.whatsappDisplay } });
  };

  return (
    <AppShell>
      <TopBar showPhone />

      <div className="mx-4 mt-4 rounded-2xl border border-border bg-card px-4 py-3">
        <div className="flex items-center justify-between">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {i > 0 && <span className="h-px flex-1 bg-border" />}
                <span
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] ${
                    i + 1 <= step
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                {i < stepLabels.length - 1 && <span className="h-px flex-1 bg-border" />}
              </div>
              <span
                className={`mt-1 text-[9px] ${
                  i + 1 <= step ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-4 pb-8">
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl text-foreground">Create My Look ✨</h1>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Let's bring your dream outfit to life.
              <br />
              Tell us what you have in mind.
            </p>
          </div>
          <div className="w-40 shrink-0 rounded-xl bg-accent/70 p-3">
            <p className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
              <ShieldCheck className="size-3.5 text-primary" /> Your information is safe
            </p>
            <p className="mt-1 text-[9px] leading-tight text-muted-foreground">
              We respect your privacy and will only use your details to create your perfect look.
            </p>
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-foreground">
            1. What are you looking for?
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {requestTypes.map(({ id, icon: Icon, title, sub }) => (
              <button
                type="button"
                key={id}
                onClick={() => setType(id)}
                className={`rounded-xl border p-3 text-left ${
                  type === id ? "border-primary bg-accent/50" : "border-border bg-card"
                }`}
              >
                <span className="flex items-start justify-between">
                  <Icon className="size-5 text-primary" />
                  <span
                    className={`size-3 rounded-full border ${
                      type === id ? "border-primary bg-primary" : "border-border"
                    }`}
                  />
                </span>
                <span className="mt-3 block text-xs font-semibold text-foreground">{title}</span>
                <span className="mt-0.5 block text-[10px] leading-tight text-muted-foreground">
                  {sub}
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        {type !== "custom" && (
          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-foreground">
              {selectedDesign ? "Your reference design" : "Pick a design to reference"}
            </legend>
            <p className="text-[11px] text-muted-foreground">
              {selectedDesign
                ? "We'll use this piece as the reference for your custom wear."
                : "Choose the piece closest to what you have in mind."}
            </p>

            {selectedDesign && (
              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-primary/40 bg-accent/40 p-3">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.name}
                  loading="lazy"
                  width={400}
                  height={550}
                  className="h-20 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-foreground">{selectedDesign.name}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    {selectedDesign.blurb}
                  </p>
                  <button
                    type="button"
                    onClick={() => setDesignId(undefined)}
                    className="mt-1 text-[10px] font-medium text-primary underline"
                  >
                    Change design
                  </button>
                </div>
              </div>
            )}

            {!selectedDesign && (
              <div className="mt-3 grid grid-cols-3 gap-2">
                {designs.map((d) => (
                  <button
                    type="button"
                    key={d.id}
                    onClick={() => setDesignId(d.id)}
                    className="overflow-hidden rounded-xl border border-border bg-card text-left"
                  >
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      width={400}
                      height={550}
                      className="h-24 w-full object-cover"
                    />
                    <span className="block px-2 py-1.5 text-[9px] font-medium leading-tight text-foreground">
                      {d.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </fieldset>
        )}

        <fieldset className="mt-6 rounded-2xl border border-border bg-card p-4">
          <legend className="px-1 text-sm font-semibold text-foreground">
            2. Tell us about you
          </legend>
          <div className="grid grid-cols-2 gap-3">
            <label className="col-span-2 rounded-xl border border-border px-3 py-2 sm:col-span-1">
              <span className="text-[10px] text-muted-foreground">Full Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <label className="col-span-2 rounded-xl border border-border px-3 py-2 sm:col-span-1">
              <span className="text-[10px] text-muted-foreground">WhatsApp Number</span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="080 1234 5678"
                className="w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <label className="rounded-xl border border-border px-3 py-2">
              <span className="text-[10px] text-muted-foreground">Preferred Contact Method</span>
              <select
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-transparent text-xs text-foreground outline-none"
              >
                <option>WhatsApp</option>
                <option>Phone call</option>
                <option>Email</option>
              </select>
            </label>
            <label className="rounded-xl border border-border px-3 py-2">
              <span className="text-[10px] text-muted-foreground">Occasion</span>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-transparent text-xs text-foreground outline-none"
              >
                <option value="">Select occasion</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate event</option>
                <option>Traditional ceremony</option>
                <option>Everyday</option>
              </select>
            </label>
            <label className="rounded-xl border border-border px-3 py-2">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <CalendarDays className="size-3" /> Preferred Date Needed
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-xs text-foreground outline-none"
              />
            </label>
            <label className="rounded-xl border border-border px-3 py-2">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <MapPin className="size-3" /> Delivery / Location
              </span>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-xs text-foreground outline-none"
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-foreground">
            3. Share some inspiration{" "}
            <span className="font-normal text-muted-foreground">(Optional)</span>
          </legend>
          <p className="text-[11px] text-muted-foreground">
            Upload any pictures or screenshots that describe what you want.
          </p>
          <div className="mt-3 grid grid-cols-5 gap-2">
            <label className="flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-primary/60 bg-accent/30 text-center">
              <Upload className="size-4 text-primary" />
              <span className="text-[9px] font-medium text-primary">Upload images</span>
              <span className="text-[8px] text-muted-foreground">JPG, PNG up to 10MB each</span>
              <input type="file" accept="image/*" multiple className="hidden" />
            </label>
            {[...clientPhotos, ...clientPhotos].slice(0, 3).map((p, i) => (
              <img
                key={i}
                src={p}
                alt="Inspiration"
                loading="lazy"
                width={800}
                height={1100}
                className="h-24 w-full rounded-xl object-cover"
              />
            ))}
            <button
              type="button"
              className="flex h-24 flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card text-[9px] text-muted-foreground"
            >
              <Plus className="size-4 text-primary" /> Add more
            </button>
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-foreground">
            4. Anything else we should know?
          </legend>
          <p className="text-[11px] text-muted-foreground">
            Add any special notes, fabric preferences, color ideas or details.
          </p>
          <div className="mt-2 rounded-xl border border-border bg-card p-3">
            <textarea
              value={notes}
              maxLength={500}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Write your message here..."
              className="w-full resize-none bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
            />
            <p className="text-right text-[10px] text-muted-foreground">{notes.length}/500</p>
          </div>
        </fieldset>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
          <img
            src={clientAvatar}
            alt="Atelier stylist"
            loading="lazy"
            width={512}
            height={512}
            className="size-11 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-[11px] leading-tight text-muted-foreground">
              We'll personally reach out to you on WhatsApp to discuss your look and next steps.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-sm font-semibold text-background"
        >
          Send My Request <Send className="size-4" />
        </button>
        <p className="mt-2 flex items-center justify-center gap-1 text-center text-[11px] text-muted-foreground">
          <MessageSquare className="size-3" /> Typically replies within a few hours
        </p>
        {selectedDesign && (
          <p className="mt-2 flex items-center justify-center gap-1 text-center text-[11px] text-primary">
            <Gift className="size-3" /> Linked design: {selectedDesign.name}
          </p>
        )}
      </form>
    </AppShell>
  );
}
