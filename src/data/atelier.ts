import amara from "@/assets/dress-amara.jpg";
import emerald from "@/assets/dress-emerald.jpg";
import purple from "@/assets/dress-purple.jpg";
import bridal from "@/assets/dress-bridal.jpg";
import ceo from "@/assets/dress-ceo.jpg";
import ankara from "@/assets/dress-ankara.jpg";
import native from "@/assets/dress-native.jpg";
import rtwShirt from "@/assets/rtw-shirt.jpg";
import rtwFloral from "@/assets/rtw-floral.jpg";
import rtwCoord from "@/assets/rtw-coord.jpg";
import btsSewing from "@/assets/bts-sewing.jpg";
import btsPacked from "@/assets/bts-packed.jpg";
import hero from "@/assets/hero-atelier.jpg";

export const BRAND = {
  name: "Ibitoye Olamide Fashionhome",
  tagline: "Made For You",
  city: "Benin City",
  country: "Nigeria",
  clients: 127,
  whatsapp: "2348012345678",
  whatsappDisplay: "080 1234 5678",
  instagram: "@ibitoye.olamide.fashionhome",
};

export const waLink = (message: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

export type Design = {
  id: string;
  name: string;
  price: number;
  blurb: string;
  about: string;
  days: string;
  madeToOrder: boolean;
  category: string;
  fit: "Midi" | "Maxi" | "Short" | "Evening";
  image: string;
  colors: string[];
};

export const designs: Design[] = [
  {
    id: "amara",
    name: "The Amara Dress",
    price: 85000,
    blurb: "Elegant, timeless and made to highlight your beauty.",
    about:
      "The Amara Dress is crafted with delicate lace and premium embellishments to give you a graceful and unforgettable look. Perfect for walking aisles, special events and elegant evenings. Every panel is cut to your measurements so the silhouette falls exactly where it should.",
    days: "7 - 10 Days",
    madeToOrder: true,
    category: "Dresses",
    fit: "Evening",
    image: amara,
    colors: ["#D9A7A0", "#2E4A3C", "#2B2B2B", "#EFE7DA"],
  },
  {
    id: "emerald-grace",
    name: "Emerald Grace Dress",
    price: 95000,
    blurb: "Luxury lace with a modern royal finish.",
    about:
      "A full length lace gown with sheer sleeves and a sculpted waist. Emerald Grace is made for the woman who wants to be remembered without saying a word.",
    days: "7 - 12 Days",
    madeToOrder: true,
    category: "Dresses",
    fit: "Maxi",
    image: emerald,
    colors: ["#0E4A3A", "#6B1F3B", "#2B2B2B", "#EFE7DA"],
  },
  {
    id: "royal-purple",
    name: "Royal Purple Gown",
    price: 90000,
    blurb: "Bold. Elegant. Unapologetically you.",
    about:
      "Structured bodice, flowing satin skirt and a train that moves with you. Royal Purple is our most requested red carpet silhouette.",
    days: "7 - 10 Days",
    madeToOrder: true,
    category: "Dresses",
    fit: "Evening",
    image: purple,
    colors: ["#6B2A78", "#0E4A3A", "#2B2B2B", "#EFE7DA"],
  },
  {
    id: "classic-bridal",
    name: "Classic Bridal Dress",
    price: 180000,
    blurb: "For your special day, made unforgettable.",
    about:
      "Hand beaded lace, an illusion back and a cathedral veil. Our bridal process includes three fittings so your dress is perfect on the day.",
    days: "14 - 21 Days",
    madeToOrder: true,
    category: "Bridal",
    fit: "Maxi",
    image: bridal,
    colors: ["#F3EBDD", "#E8D9C3", "#D9A7A0", "#FFFFFF"],
  },
  {
    id: "the-ceo",
    name: "The CEO Dress",
    price: 70000,
    blurb: "Power dressing for the modern woman.",
    about:
      "A tailored blazer dress with gold hardware and a sharp shoulder line. Cut for boardrooms, launches and the days you need to be heard.",
    days: "5 - 7 Days",
    madeToOrder: true,
    category: "Corporate",
    fit: "Midi",
    image: ceo,
    colors: ["#C7A17A", "#2B2B2B", "#0E2A4A", "#EFE7DA"],
  },
  {
    id: "ankara-luxe",
    name: "Ankara Luxe Dress",
    price: 75000,
    blurb: "African prints. Modern silhouette. Pure class.",
    about:
      "Premium wax print, puff sleeves and a wrapped hem. Ankara Luxe blends heritage fabric with a contemporary cut.",
    days: "7 - 10 Days",
    madeToOrder: true,
    category: "Native Wear",
    fit: "Midi",
    image: ankara,
    colors: ["#3F5C2A", "#C08A2E", "#6B1F3B", "#EFE7DA"],
  },
  {
    id: "gele-royale",
    name: "Gele Royale Set",
    price: 110000,
    blurb: "Traditional richness, tailored to perfection.",
    about:
      "Hand embroidered native wear with a matching gele. Made for weddings, introductions and family celebrations.",
    days: "10 - 14 Days",
    madeToOrder: true,
    category: "Native Wear",
    fit: "Maxi",
    image: native,
    colors: ["#7A3B2E", "#C08A2E", "#2B2B2B", "#EFE7DA"],
  },
  {
    id: "two-piece-sand",
    name: "Sand Two Piece",
    price: 65000,
    blurb: "Easy elegance for warm afternoons.",
    about:
      "A relaxed linen co-ord in sage, finished with drawstring detailing and deep pockets.",
    days: "5 - 7 Days",
    madeToOrder: false,
    category: "Two Piece",
    fit: "Short",
    image: rtwCoord,
    colors: ["#A8B98A", "#EFE7DA", "#C7A17A", "#2B2B2B"],
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  blurb: string;
  sizes: string[];
  fit: "Midi" | "Maxi" | "Short" | "Evening";
  category: string;
};

export const products: Product[] = [
  {
    id: "luxe-shirt",
    name: "Luxe Shirt Dress",
    price: 45000,
    image: rtwShirt,
    inStock: true,
    blurb: "Crisp cotton shirt dress with a belted waist — ready to wear today.",
    sizes: ["S", "M", "L", "XL"],
    fit: "Midi",
    category: "Ready to Wear",
  },
  {
    id: "floral-midi",
    name: "Floral Midi",
    price: 38000,
    image: rtwFloral,
    inStock: true,
    blurb: "Soft floral midi with a flattering flare hem.",
    sizes: ["S", "M", "L"],
    fit: "Midi",
    category: "Ready to Wear",
  },
  {
    id: "relaxed-coord",
    name: "Relaxed Co-ord",
    price: 42000,
    image: rtwCoord,
    inStock: false,
    blurb: "Linen two piece in sage with drawstring detailing.",
    sizes: ["M", "L", "XL"],
    fit: "Short",
    category: "Two Piece",
  },
  {
    id: "ankara-luxe-rtw",
    name: "Ankara Luxe Dress",
    price: 75000,
    image: ankara,
    inStock: true,
    blurb: "Premium wax print with puff sleeves and a wrapped hem.",
    sizes: ["S", "M", "L"],
    fit: "Midi",
    category: "Native Wear",
  },
  {
    id: "emerald-grace-rtw",
    name: "Emerald Grace Dress",
    price: 95000,
    image: emerald,
    inStock: false,
    blurb: "Full length lace gown with sheer sleeves and a sculpted waist.",
    sizes: ["S", "M"],
    fit: "Maxi",
    category: "Dresses",
  },
  {
    id: "royal-purple-rtw",
    name: "Royal Purple Gown",
    price: 90000,
    image: purple,
    inStock: true,
    blurb: "Structured bodice, flowing satin skirt, unforgettable entrance.",
    sizes: ["S", "M", "L"],
    fit: "Evening",
    category: "Dresses",
  },
  {
    id: "the-ceo-rtw",
    name: "The CEO Dress",
    price: 70000,
    image: ceo,
    inStock: true,
    blurb: "Tailored blazer dress with gold hardware and a sharp shoulder.",
    sizes: ["S", "M", "L", "XL"],
    fit: "Midi",
    category: "Corporate",
  },
  {
    id: "gele-royale-rtw",
    name: "Gele Royale Set",
    price: 110000,
    image: native,
    inStock: false,
    blurb: "Hand embroidered native wear with a matching gele.",
    sizes: ["M", "L"],
    fit: "Maxi",
    category: "Native Wear",
  },
];

export const readyToWear = products;

export type Piece = { id: string; name: string; image: string; blurb: string };

export const findPiece = (id?: string): Piece | undefined => {
  if (!id) return undefined;
  const d = designs.find((x) => x.id === id);
  if (d) return { id: d.id, name: d.name, image: d.image, blurb: d.blurb };
  const p = products.find((x) => x.id === id);
  if (p) return { id: p.id, name: p.name, image: p.image, blurb: p.blurb };
  return undefined;
};

export const referencePieces: Piece[] = [
  ...designs.map((d) => ({ id: d.id, name: d.name, image: d.image, blurb: d.blurb })),
  ...products
    .filter((p) => !designs.some((d) => d.image === p.image))
    .map((p) => ({ id: p.id, name: p.name, image: p.image, blurb: p.blurb })),
];

export const categories = [
  { label: "Custom Made", image: amara },
  { label: "Ready to Wear", image: rtwFloral },
  { label: "Dresses", image: purple },
  { label: "Native Wear", image: ankara },
  { label: "Two Piece", image: rtwCoord },
  { label: "Corporate", image: ceo },
  { label: "Bridal", image: bridal },
];

export const reels = [
  { views: "3.2K", caption: "How your dream outfit is brought to life", image: btsSewing },
  { views: "856", caption: "Fitting perfection every time", image: hero },
  { views: "2.3K", caption: "The Amara Dress from start to finish", image: amara },
  { views: "723", caption: "Packed with care, delivered with love", image: btsPacked },
  { views: "1.4K", caption: "Client slay moments", image: purple },
];

export const testimonials = [
  {
    name: "Blessing O.",
    quote:
      "The process was so smooth and the dress was beyond my expectations. I felt like the best version of myself!",
    piece: "The Amara Dress",
    image: amara,
  },
  {
    name: "Ifeoma A.",
    quote:
      "The fit, the fabric, everything was just perfect. I felt like a queen on my introduction day!",
    piece: "Gele Royale Set",
    image: native,
  },
  {
    name: "Chidinma E.",
    quote:
      "They listened to every detail I described and delivered ahead of time. My go-to atelier now.",
    piece: "Royal Purple Gown",
    image: purple,
  },
];


export const clientPhotos = [amara, emerald, purple];

export const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const heroImage = hero;
