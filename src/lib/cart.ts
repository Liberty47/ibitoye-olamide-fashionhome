import { useSyncExternalStore } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  qty: number;
};

const CART_KEY = "io-cart";
const CONVERTED_KEY = "io-converted";

let listeners: Array<() => void> = [];
let cache: CartItem[] = [];
let cacheRaw = "";

const read = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(CART_KEY) ?? "[]";
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try {
      cache = JSON.parse(raw) as CartItem[];
    } catch {
      cache = [];
    }
  }
  return cache;
};

const emit = () => listeners.forEach((l) => l());

const write = (items: CartItem[]) => {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  emit();
};

const subscribe = (cb: () => void) => {
  listeners.push(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
    window.removeEventListener("storage", cb);
  };
};

export function useCart() {
  return useSyncExternalStore(
    subscribe,
    read,
    () => [] as CartItem[],
  );
}

export const addToCart = (item: Omit<CartItem, "qty"> & { qty?: number }) => {
  const items = [...read()];
  const key = (i: CartItem) => `${i.id}-${i.size}`;
  const existing = items.find((i) => key(i) === `${item.id}-${item.size}`);
  if (existing) existing.qty += item.qty ?? 1;
  else items.push({ ...item, qty: item.qty ?? 1 });
  write(items);
};

export const updateQty = (id: string, size: string, delta: number) => {
  const items = read()
    .map((i) => (i.id === id && i.size === size ? { ...i, qty: i.qty + delta } : i))
    .filter((i) => i.qty > 0);
  write(items);
};

export const removeFromCart = (id: string, size: string) => {
  write(read().filter((i) => !(i.id === id && i.size === size)));
};

export const clearCart = () => write([]);

export const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.qty, 0);

export const cartCount = (items: CartItem[]) => items.reduce((sum, i) => sum + i.qty, 0);

/** Conversion tracking — used to decide whether to show the exit sheet. */
export const markConverted = () => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONVERTED_KEY, "1");
  window.dispatchEvent(new Event("io-converted"));
};

export const hasConverted = () =>
  typeof window !== "undefined" && window.localStorage.getItem(CONVERTED_KEY) === "1";
