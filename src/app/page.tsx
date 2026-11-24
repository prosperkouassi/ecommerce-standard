import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Heart, PackageCheck, RotateCcw, Sparkles } from "lucide-react";
import { CategoryCard, ProductGrid, PromoBanner, SectionHeading } from "@/components/storefront/cards";
import { categories, products } from "@/data/catalog";

export default function Home() {
  return (
    <main id="contenu">
      <section className="hero container-wide" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} aria-hidden="true" /> UNE MAISON QUI VOUS RESSEMBLE</span>
          <h1 id="hero-title">L&apos;art de vivre, <em>à votre façon.</em></h1>
          <p>Des pièces singulières, des matières chaleureuses et le plaisir de faire de chaque instant un moment à soi.</p>
          <Link className="button button-dark" href="/boutique">Découvrir la collection <ArrowRight size={18} aria-hidden="true" /></Link>
          <div className="hero-footnote"><span>01 / 03</span><span>Collection Maison Nova · Édition démo</span></div>
        </div>
        <div className="hero-visual"><Image src="/images/hero.svg" alt="Illustration d'un intérieur chaleureux avec fauteuil, lampe et plantes" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="hero-caption">Des essentiels choisis avec soin <span>↗</span></div>
      </section>

      <section className="section container-wide" aria-labelledby="categories-title">
        <SectionHeading id="categories-title" eyebrow="L'UNIVERS NOVA" title={<>Des envies, <em>des découvertes</em></>} description="Explorez nos univers imaginaires, imaginés pour une maison pleine de vie." />
        <div className="category-grid">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div>
      </section>

      <section className="section section-tinted" aria-labelledby="new-title"><div className="container-wide">
        <SectionHeading id="new-title" eyebrow="TOUT JUSTE ARRIVÉS" title={<>Les nouvelles <em>inspirations</em></>} description="Des détails qui changent tout, à découvrir au fil des saisons." action={{ label: "Voir le catalogue", href: "/boutique" }} />
        <ProductGrid products={products.filter((product) => product.isNew).slice(0, 4)} />
      </div></section>

      <section className="editorial container-wide" aria-labelledby="editorial-title">
        <div className="editorial-image"><Image src="/images/editorial.svg" alt="Illustration d'une table dressée et d'objets de décoration" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="editorial-copy"><span className="eyebrow">LE SAVOIR-FAIRE DU QUOTIDIEN</span><h2 id="editorial-title">Le beau se cache dans <em>les petites choses.</em></h2><p>Une lumière douce. Une tasse préférée. Un coin à soi. Maison Nova imagine une sélection fictive d&apos;objets qui rend chaque jour un peu plus beau.</p><Link className="text-link" href="/boutique">Explorer la sélection <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </section>

      <section className="section container-wide" aria-labelledby="popular-title">
        <SectionHeading id="popular-title" eyebrow="VOS COUPS DE CŒUR" title={<>Les plus <em>aimés</em></>} description="Nos favoris de démonstration, pour trouver votre prochaine inspiration." action={{ label: "Tout voir", href: "/boutique" }} />
        <ProductGrid products={products.filter((product) => product.isBestseller).slice(0, 4)} />
      </section>

      <section className="container-wide promotion-section"><PromoBanner /></section>

      <section className="section benefits container-wide" aria-label="Les engagements de la boutique de démonstration">
        <div><PackageCheck aria-hidden="true" /><h3>Une sélection inspirante</h3><p>Des objets fictifs imaginés pour cette démonstration.</p></div>
        <div><Heart aria-hidden="true" /><h3>Le souci du détail</h3><p>Un univers pensé pour le plaisir de parcourir.</p></div>
        <div><Gift aria-hidden="true" /><h3>Des idées à offrir</h3><p>Une collection pour imaginer vos prochains cadeaux.</p></div>
        <div><RotateCcw aria-hidden="true" /><h3>Sans engagement</h3><p>Aucune commande ni transaction n&apos;est effectuée ici.</p></div>
      </section>

      <section className="newsletter" aria-labelledby="newsletter-title"><div className="container-wide newsletter-inner"><div><span className="eyebrow">ON GARDE LE CONTACT ?</span><h2 id="newsletter-title">Un peu de <em>beau</em> dans votre boîte mail.</h2><p>La newsletter arrivera dans une prochaine version. Aucun e-mail n&apos;est collecté sur cette démo.</p></div><div className="newsletter-soon">Inscription bientôt disponible <ArrowRight size={18} aria-hidden="true" /></div></div></section>
    </main>
  );
}
