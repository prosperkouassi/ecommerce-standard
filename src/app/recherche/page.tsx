export const instant = false;
import type { Metadata } from 'next';
import { CatalogListing } from '@/components/catalog/listing';
import type { CatalogQuery } from '@/lib/catalog';
import { SearchBox } from '@/components/catalog/search-box';
export const metadata:Metadata={title:'Recherche',robots:{index:false,follow:false}};
export default async function SearchPage({searchParams}:{searchParams:Promise<CatalogQuery>}) { const query=await searchParams; return <main id="contenu" className="container-wide listing-page"><span className="eyebrow">RECHERCHER</span><h1>Que cherchez-vous ?</h1><p>Utilisez les filtres pour découvrir les articles de démonstration.</p><SearchBox /><CatalogListing query={query} base="/recherche" /></main>; }
