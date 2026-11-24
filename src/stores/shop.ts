'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type CartItem = { productId: string; quantity: number; variant: string };
export type DemoOrder = { reference: string; createdAt: string; items: CartItem[]; subtotal: number; discount: number; shipping: number; total: number; delivery: string; payment: string; status: string };
type ShopState = { cart: CartItem[]; favorites: string[]; compared: string[]; orders: DemoOrder[]; promoCode: string; setPromoCode: (code: string) => void;
 add: (productId: string, quantity: number, variant: string) => void; updateQuantity: (productId: string, variant: string, quantity: number) => void;
 remove: (productId: string, variant: string) => void; toggleFavorite: (id: string) => void; toggleCompare: (id: string) => void; placeOrder: (order: DemoOrder) => void; clearCart: () => void };
export const useShop = create<ShopState>()(persist((set) => ({ cart: [], favorites: [], compared: [], orders: [], promoCode: '', setPromoCode: (promoCode) => set({ promoCode }),
 add: (productId, quantity, variant) => set(({ cart }) => { const found = cart.find((entry) => entry.productId === productId && entry.variant === variant); return { cart: found ? cart.map((entry) => entry === found ? { ...entry, quantity: Math.min(99, entry.quantity + quantity) } : entry) : [...cart, { productId, quantity, variant }] }; }),
 updateQuantity: (productId, variant, quantity) => set(({ cart }) => ({ cart: cart.map((item) => item.productId === productId && item.variant === variant ? { ...item, quantity: Math.max(1, Math.min(99, quantity)) } : item) })),
 remove: (productId, variant) => set(({ cart }) => ({ cart: cart.filter((item) => item.productId !== productId || item.variant !== variant) })),
 toggleFavorite: (id) => set(({ favorites }) => ({ favorites: favorites.includes(id) ? favorites.filter((x) => x !== id) : [...favorites, id] })),
 toggleCompare: (id) => set(({ compared }) => ({ compared: compared.includes(id) ? compared.filter((x) => x !== id) : compared.length >= 3 ? compared : [...compared, id] })),
 placeOrder: (order) => set(({ orders }) => ({ orders: [order, ...orders].slice(0, 10), cart: [] })), clearCart: () => set({ cart: [] }),
}), { name: 'maison-nova-demo', version: 1, partialize: (s) => ({ cart: s.cart, favorites: s.favorites, compared: s.compared, orders: s.orders, promoCode: s.promoCode }) }));
