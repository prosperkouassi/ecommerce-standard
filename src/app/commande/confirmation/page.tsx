export const instant = false;
import type { Metadata } from 'next';
import { OrderConfirmation } from '@/components/checkout/confirmation';
export const metadata: Metadata = { title: 'Résultat de la simulation', robots: { index: false, follow: false } };
export default async function Page({ searchParams }: { searchParams: Promise<{ reference?: string }> }) {
 const { reference } = await searchParams;
 return <main id="contenu" className="container-wide listing-page"><OrderConfirmation reference={reference ?? ''} /></main>;
}
