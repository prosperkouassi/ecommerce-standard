export const instant = false;
import type { Metadata } from 'next';
import { CatalogListing } from '@/components/catalog/listing';
import type { CatalogQuery } from '@/lib/catalog';
export const metadata: Metadata = { title: 'La boutique', description: 'Explorez 50 produits fictifs Maison Nova : décoration, mobilier, luminaires et textiles.', robots: {index:false,follow:false} };
export default async function Boutique({ searchParams }: { searchParams: Promise<CatalogQuery> }) { const query = await searchParams; return <main id="contenu" className="container-wide listing-page"><span className="eyebrow">LA SÉLECTION MAISON NOVA</span><h1>La boutique <em>à explorer.</em></h1><p>50 produits fictifs pour parcourir une expérience e-commerce de démonstration.</p><CatalogListing query={query} /></main>; }
