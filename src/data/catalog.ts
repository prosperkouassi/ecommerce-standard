export type Category = { slug: string; name: string; image: string; description: string };
export type ProductVariation = { label: string; values: string[]; priceAdjustments?: Record<string, number | undefined>; unavailable?: string[] };
export type Product = { id: string; slug: string; name: string; category: Category['slug']; brand: string; color: string; price: number; compareAtPrice?: number; image: string; imageAlt: string; available: boolean; variations: ProductVariation[]; description: string; isNew?: boolean; isBestseller?: boolean; popularity: number };

export const categories: Category[] = [
  { slug: 'decoration', name: 'Décoration', description: 'Des détails qui font la différence', image: '/images/decor.svg' },
  { slug: 'mobilier', name: 'Mobilier', description: 'Le confort a du caractère', image: '/images/chair.svg' },
  { slug: 'art-de-la-table', name: 'Art de la table', description: 'Les moments à partager', image: '/images/vase.svg' },
  { slug: 'luminaires', name: 'Luminaires', description: 'Une lumière à votre image', image: '/images/lamp.svg' },
  { slug: 'textiles', name: 'Textiles', description: 'La douceur du quotidien', image: '/images/cushion.svg' },
  { slug: 'accessoires', name: 'Accessoires', description: 'Les dernières touches', image: '/images/decor.svg' },
];

const names = [
  ['Vase Alba', 'decoration', 'vase', 24500], ['Fauteuil Soleil', 'mobilier', 'chair', 189000],
  ['Lampe Luna', 'luminaires', 'lamp', 49500], ['Coussin Nomade', 'textiles', 'cushion', 18500],
  ['Carafe Ambre', 'art-de-la-table', 'vase', 28500], ['Assise Atelier', 'mobilier', 'chair', 95000],
  ['Photophore Sable', 'decoration', 'decor', 12500], ['Suspension Épure', 'luminaires', 'lamp', 64000],
  ['Plaid Horizon', 'textiles', 'cushion', 32000], ['Coupe Dune', 'art-de-la-table', 'vase', 22000],
  ['Tabouret Nacre', 'mobilier', 'chair', 78000], ['Panier Matin', 'accessoires', 'decor', 19000],
  ['Vase Orée', 'decoration', 'vase', 31000], ['Lampe Atelier', 'luminaires', 'lamp', 59000],
  ['Coussin Brise', 'textiles', 'cushion', 21500], ['Verre Aube', 'art-de-la-table', 'vase', 15500],
  ['Fauteuil Oasis', 'mobilier', 'chair', 210000], ['Boîte Terra', 'accessoires', 'decor', 17500],
  ['Miroir Éclat', 'decoration', 'decor', 43000], ['Applique Calme', 'luminaires', 'lamp', 38000],
  ['Nappe Linéa', 'textiles', 'cushion', 46000], ['Plateau Lisse', 'art-de-la-table', 'vase', 27000],
  ['Banc Équilibre', 'mobilier', 'chair', 149000], ['Corbeille Sol', 'accessoires', 'decor', 22500],
  ['Vase Nuage', 'decoration', 'vase', 26500], ['Lampe Halo', 'luminaires', 'lamp', 55000],
  ['Coussin Terre', 'textiles', 'cushion', 20500], ['Tasse Source', 'art-de-la-table', 'vase', 14500],
  ['Chaise Sillage', 'mobilier', 'chair', 135000], ['Cadre Ligne', 'accessoires', 'decor', 24000],
  ['Bougeoir Murmure', 'decoration', 'decor', 11500], ['Suspension Ciel', 'luminaires', 'lamp', 72000],
  ['Plaid Étoile', 'textiles', 'cushion', 39500], ['Bol Céleste', 'art-de-la-table', 'vase', 16500],
  ['Table Aurore', 'mobilier', 'chair', 259000], ['Sac Maison', 'accessoires', 'decor', 18000],
  ['Vase Rivage', 'decoration', 'vase', 32500], ['Lampe Sève', 'luminaires', 'lamp', 48000],
  ['Housse Alba', 'textiles', 'cushion', 17000], ['Pichet Noma', 'art-de-la-table', 'vase', 33500],
  ['Fauteuil Noro', 'mobilier', 'chair', 175000], ['Panier Tressé', 'accessoires', 'decor', 29000],
  ['Objet Ondes', 'decoration', 'decor', 35000], ['Lampe Alba', 'luminaires', 'lamp', 52000],
  ['Coussin Aube', 'textiles', 'cushion', 22500], ['Assiette Esquisse', 'art-de-la-table', 'vase', 18500],
  ['Étagère Élan', 'mobilier', 'chair', 120000], ['Pochette Jour', 'accessoires', 'decor', 15500],
  ['Vase Sillage', 'decoration', 'vase', 25500], ['Lampe Noma', 'luminaires', 'lamp', 47000],
] as const;
function slugify(input: string) { return input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
export const products: Product[] = names.map(([name, category, visual, price], index) => ({
  id: `nova-${String(index + 1).padStart(3, '0')}`, slug: slugify(name), name, category, brand: index % 3 === 0 ? 'Atelier Nova' : 'Maison Nova',
  color: ['Sable', 'Terracotta', 'Écru', 'Naturel'][index % 4], price, compareAtPrice: index % 7 === 0 ? Math.round(price * 1.2 / 500) * 500 : undefined,
  image: `/images/${visual}.svg`, imageAlt: `Visuel neutre temporaire pour ${name}`, available: index % 13 !== 3,
  variations: [{ label: 'Coloris', values: ['Sable', 'Terracotta', 'Écru'], priceAdjustments: { Terracotta: 1500, 'Écru': 1000 }, unavailable: index % 9 === 0 ? ['Écru'] : [] }, ...(category === 'textiles' ? [{ label: 'Format', values: ['Carré', 'Rectangulaire'], priceAdjustments: { Rectangulaire: 2500 } }] : [])],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${name} est un produit fictif présenté pour illustrer la boutique Maison Nova.`,
  isNew: index < 12, isBestseller: index % 4 === 0 || index === 2 || index === 5, popularity: 100 - index,
}));
export const formatPrice = (price: number) => `${new Intl.NumberFormat('fr-CI').format(price)} FCFA`;

export function variantPrice(product: Product, selection: string) { return product.price + product.variations.reduce((sum, variation) => sum + (variation.priceAdjustments?.[selection.match(new RegExp(`${variation.label}: ([^·]+)`))?.[1]?.trim() ?? ""] ?? 0), 0); }
export function variantAvailable(product: Product, selection: string) { return product.available && product.variations.every((variation) => !variation.unavailable?.some((value) => selection.includes(`${variation.label}: ${value}`))); }
