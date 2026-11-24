export type Category = { slug: string; name: string; image: string; description: string };
export type ProductVariation = { label: string; values: string[] };
export type Product = { id: string; slug: string; name: string; category: Category["slug"]; price: number; compareAtPrice?: number; image: string; imageAlt: string; available: boolean; variations: ProductVariation[]; isNew?: boolean; isBestseller?: boolean };

export const categories: Category[] = [
  { slug: "decoration", name: "Décoration", description: "Des détails qui font la différence", image: "/images/decor.svg" },
  { slug: "mobilier", name: "Mobilier", description: "Le confort a du caractère", image: "/images/chair.svg" },
  { slug: "art-de-la-table", name: "Art de la table", description: "Les moments à partager", image: "/images/vase.svg" },
];

export const products: Product[] = [
  { id: "nova-001", slug: "vase-alba", name: "Vase Alba", category: "decoration", price: 24500, image: "/images/vase.svg", imageAlt: "Illustration du vase Alba en terre cuite", available: true, variations: [{ label: "Coloris", values: ["Terracotta", "Sable"] }], isNew: true, isBestseller: true },
  { id: "nova-002", slug: "fauteuil-soleil", name: "Fauteuil Soleil", category: "mobilier", price: 189000, image: "/images/chair.svg", imageAlt: "Illustration du fauteuil Soleil", available: true, variations: [{ label: "Tissu", values: ["Écru", "Ocre"] }], isNew: true },
  { id: "nova-003", slug: "lampe-luna", name: "Lampe Luna", category: "decoration", price: 49500, image: "/images/lamp.svg", imageAlt: "Illustration de la lampe Luna", available: true, variations: [{ label: "Finition", values: ["Naturelle", "Brun"] }], isNew: true, isBestseller: true },
  { id: "nova-004", slug: "coussin-nomade", name: "Coussin Nomade", category: "decoration", price: 18500, image: "/images/cushion.svg", imageAlt: "Illustration du coussin Nomade", available: false, variations: [{ label: "Format", values: ["Carré", "Rectangulaire"] }], isNew: true },
  { id: "nova-005", slug: "carafe-ambre", name: "Carafe Ambre", category: "art-de-la-table", price: 28500, compareAtPrice: 35000, image: "/images/vase.svg", imageAlt: "Illustration de la carafe Ambre", available: true, variations: [{ label: "Contenance", values: ["1 L", "1,5 L"] }], isBestseller: true },
  { id: "nova-006", slug: "assise-atelier", name: "Assise Atelier", category: "mobilier", price: 95000, image: "/images/chair.svg", imageAlt: "Illustration de l'assise Atelier", available: true, variations: [{ label: "Coloris", values: ["Naturel", "Noisette"] }], isBestseller: true },
];

export const formatPrice = (price: number) => `${new Intl.NumberFormat("fr-CI").format(price)} FCFA`;
