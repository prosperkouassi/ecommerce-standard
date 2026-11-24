import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Category, type Product, formatPrice } from "@/data/catalog";

export function SectionHeading({ id, eyebrow, title, description, action }: { id: string; eyebrow: string; title: React.ReactNode; description?: string; action?: { label: string; href: string } }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2 id={id}>{title}</h2>{description && <p>{description}</p>}</div>{action && <Link className="text-link" href={action.href}>{action.label}<ArrowRight size={18} aria-hidden="true" /></Link>}</div>;
}

export function CategoryCard({ category }: { category: Category }) {
  return <Link className="category-card" href={`/boutique?categorie=${category.slug}`}><div className="category-image"><Image src={category.image} alt="" fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="category-info"><div><h3>{category.name}</h3><p>{category.description}</p></div><span aria-hidden="true" className="round-arrow"><ArrowRight size={19} /></span></div></Link>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card"><div className="product-image"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 650px) 50vw, (max-width: 1000px) 33vw, 25vw" />{product.isNew && <span className="product-badge">Nouveau</span>}{!product.available && <span className="product-badge muted">Indisponible</span>}</div><div className="product-copy"><span className="product-category">{product.category.replaceAll("-", " ")}</span><h3>{product.name}</h3><p className="product-price">{formatPrice(product.price)} {product.compareAtPrice && <s>{formatPrice(product.compareAtPrice)}</s>}</p><p className="product-availability">{product.available ? "Découvrir dans le catalogue" : "Article indisponible"}</p></div></article>;
}

export function ProductGrid({ products }: { products: Product[] }) {
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}

export function PromoBanner() {
  return <div className="promo-banner"><div><span className="eyebrow">LE RENDEZ-VOUS DU MOMENT</span><h2>De belles idées, <em>tout simplement.</em></h2><p>Découvrez une sélection de produits fictifs à prix doux, pensée pour inspirer votre intérieur.</p><Link className="button button-light" href="/boutique">Explorer la sélection <ArrowRight size={18} aria-hidden="true" /></Link></div><div className="promo-art" aria-hidden="true"><Image src="/images/lamp.svg" alt="" fill sizes="(max-width: 800px) 100vw, 45vw" /></div></div>;
}
