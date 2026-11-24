import Link from 'next/link';
import { ProductGrid } from '@/components/storefront/cards';
import { CatalogFilters } from './filters';
import { filterCatalog, type CatalogQuery } from '@/lib/catalog';
export function CatalogListing({ query, base = '/boutique' }: { query: CatalogQuery; base?: string }) {
 const result = filterCatalog(query);
 function pageUrl(page: number) { const params = new URLSearchParams(); Object.entries(query).forEach(([key,value]) => { if (value && key !== 'page') params.set(key,value); }); params.set('page',String(page)); return `${base}?${params}`; }
 return <div className="catalog-layout"><CatalogFilters current={query} base={base} /><div className="catalog-results"><p className="results-count" aria-live="polite">{result.count} produit{result.count > 1 ? 's' : ''} fictif{result.count > 1 ? 's' : ''}</p>{result.items.length ? <ProductGrid products={result.items} /> : <div className="empty-state"><h2>Aucun produit trouvé</h2><p>Essayez d&apos;ajuster les filtres ou votre recherche.</p><Link href={base} className="text-link">Voir tous les produits →</Link></div>}{result.pageCount > 1 && <nav aria-label="Pagination du catalogue" className="pagination">{Array.from({length:result.pageCount},(_,i) => <Link key={i} href={pageUrl(i+1)} aria-current={result.page === i+1 ? 'page' : undefined}>{i+1}</Link>)}</nav>}</div></div>;
}
