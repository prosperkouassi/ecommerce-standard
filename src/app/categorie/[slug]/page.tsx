export const instant = false;
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/data/catalog';
import { catalog, type CatalogQuery } from '@/lib/catalog';
import { CatalogListing } from '@/components/catalog/listing';
export function generateStaticParams() { return categories.map(({slug}) => ({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> { const c = catalog.category((await params).slug); return {title:c?.name ?? 'Catégorie',description:c?.description,robots:{index:false,follow:false}}; }
export default async function CategoryPage({params,searchParams}:{params:Promise<{slug:string}>;searchParams:Promise<CatalogQuery>}) { const {slug}=await params; const category=catalog.category(slug); if(!category) notFound(); const query=await searchParams; return <main id="contenu" className="container-wide listing-page"><nav aria-label="Fil d’Ariane" className="crumbs"><Link href="/">Accueil</Link> / <Link href="/boutique">Boutique</Link> / {category.name}</nav><span className="eyebrow">UNIVERS NOVA</span><h1>{category.name}</h1><p>{category.description}. Découvrez une sélection fictive, sans achat réel.</p><CatalogListing query={{...query,categorie:slug}} base={`/categorie/${slug}`} /></main>; }
