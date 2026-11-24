import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalog } from '@/lib/catalog';
import { products } from '@/data/catalog';
import { ProductDetail } from '@/components/catalog/product-detail';
import { ProductGrid, SectionHeading } from '@/components/storefront/cards';
export function generateStaticParams(){return products.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const item=catalog.bySlug((await params).slug);return {title:item?.name??'Produit',description:item?.description,robots:{index:false,follow:false}};}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}) { const item=catalog.bySlug((await params).slug); if(!item)notFound(); const category=catalog.category(item.category); return <main id="contenu" className="container-wide product-page"><nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link> / <Link href="/boutique">Boutique</Link> / <Link href={`/categorie/${item.category}`}>{category?.name}</Link> / {item.name}</nav><ProductDetail product={item}/><section className="section"><SectionHeading id="related" eyebrow="POUR CONTINUER" title={<>Dans le même <em>univers</em></>}/><ProductGrid products={catalog.related(item)}/></section></main>; }
export const instant = false;
