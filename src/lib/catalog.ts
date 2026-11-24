import { categories, products, type Product } from '@/data/catalog';
export const catalog = {
  all: (): Product[] => products,
  bySlug: (slug: string) => products.find((item) => item.slug === slug),
  category: (slug: string) => categories.find((item) => item.slug === slug),
  related: (item: Product) => products.filter((other) => other.category === item.category && other.id !== item.id).slice(0, 4),
};
export type CatalogQuery = { q?: string; categorie?: string; marque?: string; couleur?: string; disponible?: string; min?: string; max?: string; tri?: string; page?: string };
export function filterCatalog(input: CatalogQuery) {
  const search = (input.q ?? '').trim().toLocaleLowerCase('fr');
  const min = input.min ? Number(input.min) : 0;
  const max = input.max ? Number(input.max) : Infinity;
  let items = products.filter((item) =>
    (!search || `${item.name} ${item.category} ${item.brand}`.toLocaleLowerCase('fr').includes(search)) &&
    (!input.categorie || item.category === input.categorie) && (!input.marque || item.brand === input.marque) &&
    (!input.couleur || item.color === input.couleur) && (input.disponible !== '1' || item.available) &&
    item.price >= (Number.isFinite(min) ? min : 0) && item.price <= (Number.isFinite(max) ? max : Infinity)
  );
  switch (input.tri) {
    case 'prix-asc': items = items.sort((a, b) => a.price - b.price); break;
    case 'prix-desc': items = items.sort((a, b) => b.price - a.price); break;
    case 'nouveautes': items = items.sort((a, b) => Number(b.isNew) - Number(a.isNew)); break;
    default: items = items.sort((a, b) => b.popularity - a.popularity);
  }
  const page = Math.min(100, Math.max(1, Number.parseInt(input.page ?? '1', 10) || 1));
  const pageSize = 12;
  return { items: items.slice((page - 1) * pageSize, page * pageSize), count: items.length, page, pageCount: Math.max(1, Math.ceil(items.length / pageSize)) };
}
