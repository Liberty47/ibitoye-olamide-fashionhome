# Vanessa Atelier — Mobile Web App

A mobile-first fashion atelier app for a Benin City, Nigeria custom-made clothing brand, built exactly to the six uploaded screens. All models and garments are African.

## Screens and flow

```text
Home (screen 1)
  ├─ category chips ─────────► Collections / Dresses (screen 2)
  │                              └─ card tap ──────► Design Detail (screen 3)
  ├─ Ready to Wear card ─────► Design Detail (screen 3)
  └─ "Create My Look" CTA ──► Create My Look form (screen 4)
                                 └─ submit ───────► Request Received (screen 5)

Exit-intent / back-out anywhere ► "Leaving so soon?" sheet (screen 6)
```

1. **Home** — sticky header (logo, location, "Trusted by 127+ Clients", avatar), hero carousel with "Made for the woman who knows what she wants" + Watch Our Story, side rail of like/comment/share counters, "What are you looking for?" circular category row, "Behind the scenes & more" video reel strip, 4 trust stats, "What our clients say" testimonial card + "Ready to Wear" 3-product row, Instagram follow strip, and the "Ready to create your perfect look?" CTA banner.
2. **Collections/Dresses** — back header with cart badge, DRESSES banner over an atelier photo, filter chips (All / Midi / Maxi / Short / Evening / Filter), "36 Designs" + sort control, 2-column product grid with price, description, production time, "Custom Made" tag, wishlist heart and play button; trust strip at the bottom.
3. **Design Detail** — main image with "Watch Full Look" plus a 3-thumbnail column with "+8", title + Custom Made pill, price / custom made / production time row, About This Design with fabric-color swatches, "Why you'll love it" 4-icon row, "See it on real clients" gallery, testimonial, 5-step "How it works" timeline, sticky-ish CTA (Create My Look + Chat on WhatsApp).
4. **Create My Look** — 4-step progress header (Tell Us / Your Details / Inspiration / Review & Send), privacy card, request-type selector cards, contact form (name, WhatsApp, contact method, occasion, date, delivery), inspiration image upload with previews, notes textarea with 0/500 counter, and "Send My Request".
5. **Request Received** — confirmation hero with gift-bag artwork, WhatsApp callback number, 5-step "What happens next?" timeline, designer note, "Chat on WhatsApp" card, "Keep exploring" collection row, "Create another request".
6. **Leaving so soon?** — bottom-sheet modal with reason radio cards, WhatsApp preview bubble showing the message that will be sent, green Chat on WhatsApp button; triggered by exit intent / back gesture.

Persistent bottom tab bar on every screen: Home, Collections, Create My Look (raised gold +), Messages (badge 2), Profile.

## Style

- Screens 1 and 2 use **light backgrounds** (warm ivory/cream) as requested, keeping gold accents, dark image cards and the same layout; screens 3–6 stay light exactly as in the mockups.
- Palette: ivory `#FCFAF6`, warm sand cards, deep espresso text, brand gold `#C9A227`/`#B98A3C`, WhatsApp green for chat actions.
- Typography: elegant serif display (Cormorant/Playfair-style) for headings and wordmark, clean sans for body — matching the mockups' letter-spaced "VANESSA ATELIER / MADE FOR YOU" lockup.
- Rounded 16–24px cards, soft shadows, thin gold hairlines, small icon+label trust rows.

## Imagery

Generate on-brand photography of African women and African garments (lace gowns, ankara, native wear, corporate looks, bridal) for hero, category circles, product cards, detail gallery and testimonials. No non-African models anywhere.

## Technical notes

- TanStack Start routes: `/` (home), `/collections`, `/design/$id`, `/create-my-look`, `/request-received`; the leaving sheet is a global component.
- Frontend only — no database. Form state is held in React; submitting builds a prefilled WhatsApp `wa.me` deep link and routes to the confirmation screen.
- Product/testimonial data lives in a typed local data module so cards, detail pages and "keep exploring" stay consistent.
- Design tokens added to `src/styles.css` (oklch), shadcn components restyled via variants; each route gets its own SEO `head()`.
