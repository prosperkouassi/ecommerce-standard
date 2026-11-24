import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/storefront/cards";
import { products } from "@/data/catalog";

const univers = [
  { name: "Mobilier", subtitle: "Des pièces qui donnent le ton", href: "/boutique?categorie=mobilier", image: "/images/home/salon.jpg", alt: "Salon lumineux aux matières naturelles" },
  { name: "Luminaires", subtitle: "La lumière change tout", href: "/boutique?categorie=luminaires", image: "/images/home/luminaire.jpg", alt: "Suspension au-dessus d'une table dans un intérieur contemporain" },
  { name: "Décoration", subtitle: "Le détail qui vous ressemble", href: "/boutique?categorie=decoration", image: "/images/home/decoration.jpg", alt: "Salon avec cheminée et objets de décoration" },
];

export default function Home() {
  return (
    <main id="contenu" className="nova-home">
      <section className="nova-hero" aria-labelledby="nova-hero-title">
        <Image src="/images/home/hero.jpg" alt="Salon baigné de lumière avec fauteuils et matières chaleureuses" fill priority sizes="100vw" className="nova-hero-photo" />
        <div className="nova-hero-inner">
          <div className="nova-hero-panel">
            <span className="nova-kicker">MAISON NOVA · LA BOUTIQUE DÉMO</span>
            <h1 id="nova-hero-title">La maison, <span>à votre image</span></h1>
            <p>Des objets et du mobilier pour imaginer un intérieur qui ne ressemble qu’à vous.</p>
            <Link href="/boutique" className="nova-cta">Explorer la boutique <ArrowRight size={20} aria-hidden="true" /></Link>
            <small>Une collection fictive pour découvrir notre expérience e-commerce.</small>
          </div>
        </div>
        <div className="nova-hero-index" aria-hidden="true">01 <span>/</span> MAISON NOVA</div>
      </section>

      <section className="nova-univers nova-shell" aria-labelledby="nova-univers-title">
        <div className="nova-section-intro">
          <span className="nova-kicker">UN INTÉRIEUR À COMPOSER</span>
          <h2 id="nova-univers-title">Chaque pièce a son histoire</h2>
          <p>Un fauteuil pour ralentir, une lumière pour se retrouver, un objet qui fait sourire. À vous de choisir l’ambiance.</p>
        </div>
        <div className="nova-univers-grid">
          {univers.map((item, index) => (
            <Link className="nova-univers-card" href={item.href} key={item.name}>
              <div className="nova-univers-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 740px) 100vw, 33vw" /></div>
              <div className="nova-univers-meta"><span>0{index + 1} / UNIVERS</span><ArrowRight size={21} aria-hidden="true" /></div>
              <h3>{item.name}</h3>
              <p>{item.subtitle}</p>
            </Link>
          ))}
        </div>
        <Link className="nova-inline-link" href="/boutique">Voir les 50 produits de démonstration <ArrowRight size={20} aria-hidden="true" /></Link>
      </section>

      <section className="nova-products nova-shell" aria-labelledby="nova-products-title">
        <div className="nova-products-heading">
          <div>
            <span className="nova-kicker">APERÇU DU CATALOGUE · PRODUITS FICTIFS</span>
            <h2 id="nova-products-title">Quelques pièces à découvrir</h2>
            <p>Des fiches de démonstration pour essayer les coloris, les favoris et le panier. Les visuels produits sont provisoires.</p>
          </div>
          <Link className="nova-inline-link" href="/boutique">Explorer tous les produits <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
        <ProductGrid products={[products[1], products[2], products[4], products[6]]} />
      </section>

      <section className="nova-story" aria-labelledby="nova-story-title">
        <div className="nova-story-image"><Image src="/images/home/editorial.jpg" alt="Canapé et table basse dans un salon ouvert sur un jardin" fill sizes="(max-width: 800px) 100vw, 58vw" /></div>
        <div className="nova-story-content">
          <span className="nova-kicker">VIVRE CHEZ SOI</span>
          <h2 id="nova-story-title">Le beau se vit tous les jours</h2>
          <p>Un endroit pour se poser. Une matière que l’on aime toucher. Une lumière qui rend la fin de journée plus douce. C’est dans ces instants que la maison devient la vôtre.</p>
          <Link className="nova-inline-link" href="/boutique">Parcourir les collections <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="nova-selection nova-shell" aria-labelledby="nova-selection-title">
        <div className="nova-selection-copy">
          <span className="nova-kicker">LA SÉLECTION MAISON NOVA</span>
          <h2 id="nova-selection-title">Une idée prend forme chez vous</h2>
          <p>Explorez le catalogue fictif, choisissez un coloris et essayez le panier. Tout le parcours est une démonstration : aucune commande n’est transmise.</p>
          <Link href="/boutique" className="nova-cta">Découvrir les produits <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
        <div className="nova-selection-photo"><Image src="/images/home/final.jpg" alt="Salon clair avec canapé et mobilier aux lignes douces" fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
      </section>

      <section className="nova-endnote nova-shell" aria-label="À propos de cette démonstration">
        <span>MAISON NOVA / DÉMONSTRATION</span>
        <p>Photographies d’ambiance illustratives · Produits fictifs · Aucun paiement réel.</p>
        <Link href="/a-propos">Découvrir le projet <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
