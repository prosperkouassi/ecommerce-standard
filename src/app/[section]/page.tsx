import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const sections: Record<string, { title: string; description: string }> = {
  boutique: { title: "La boutique", description: "Le catalogue détaillé et les fiches produits seront disponibles dans une prochaine phase. Découvrez déjà la sélection fictive sur la page d'accueil." },
  panier: { title: "Votre panier", description: "Le panier n'est pas encore actif. Aucune commande ne peut être passée sur ce site de démonstration." },
  favoris: { title: "Vos favoris", description: "La liste de favoris sera disponible dans une prochaine phase. Aucun produit n'est enregistré pour le moment." },
  commande: { title: "Commande", description: "Le parcours de commande et les paiements ne sont pas disponibles sur cette démonstration." },
  contact: { title: "Contact", description: "Le formulaire de contact sera ajouté dans une prochaine phase. Aucune donnée n'est collectée ici." },
  faq: { title: "Questions fréquentes", description: "La rubrique d'aide sera complétée dans une prochaine phase. Aucune commande réelle n'est possible." },
};
export function generateStaticParams() { return Object.keys(sections).map((section) => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> { const { section } = await params; return sections[section] ? { title: sections[section].title, description: sections[section].description, robots: { index: false, follow: false } } : {}; }
export default async function FutureSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = sections[section];
  if (!content) notFound();
  return <main id="contenu" className="coming-soon container-wide"><span className="eyebrow">MAISON NOVA · SITE DE DÉMONSTRATION</span><h1>{content.title}</h1><p>{content.description}</p><Link className="button button-dark" href="/">Retour à l&apos;accueil <ArrowRight size={18} aria-hidden="true" /></Link></main>;
}
