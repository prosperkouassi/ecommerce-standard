"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { categories } from "@/data/catalog";
import { useShop } from "@/stores/shop";
import { useHydrated } from "@/lib/use-hydrated";

const soon = [{ label: "Compte de démonstration", icon: UserRound }];

export function SiteHeader() {
  const hydrated = useHydrated();
  const cartCount = useShop((s) => s.cart.reduce((sum, item) => sum + item.quantity, 0));
  const favoriteCount = useShop((s) => s.favorites.length);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const megaButton = useRef<HTMLButtonElement>(null);
  const megaPanel = useRef<HTMLDivElement>(null);
  const mobilePanel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mobileOpen && !megaOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileOpen) { setMobileOpen(false); mobileButton.current?.focus(); }
        if (megaOpen) { setMegaOpen(false); megaButton.current?.focus(); }
      }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (megaOpen && !megaPanel.current?.contains(target) && !megaButton.current?.contains(target)) setMegaOpen(false);
      if (mobileOpen && !mobilePanel.current?.contains(target) && !mobileButton.current?.contains(target)) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, [mobileOpen, megaOpen]);
  return <header className="site-header">
    <div className="container-wide header-main">
      <button className="icon-button mobile-toggle" type="button" ref={mobileButton} aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      <Link className="brand" href="/" aria-label="Maison Nova, accueil" onClick={() => { setMobileOpen(false); setMegaOpen(false); }}>MAISON <span>NOVA.</span></Link>
      <nav className="desktop-nav" aria-label="Navigation principale"><Link href="/">Accueil</Link><button ref={megaButton} type="button" aria-expanded={megaOpen} aria-controls="mega-menu" onClick={() => setMegaOpen(!megaOpen)}>La boutique <ChevronDown size={15} aria-hidden="true" /></button><Link href="/boutique?categorie=decoration">Décoration</Link><Link href="/boutique?categorie=mobilier">Mobilier</Link><Link href="/contact">Notre univers</Link></nav>
      <div className="header-actions"><Link className="icon-button desktop-action" href="/recherche" aria-label="Rechercher"><Search /></Link><Link className="icon-button desktop-action" href="/favoris" aria-label={`Favoris, ${hydrated ? favoriteCount : 0} article(s)`}><Heart />{hydrated && favoriteCount > 0 && <span className="bag-count">{favoriteCount}</span>}</Link><Link className="icon-button desktop-action" href="/mon-compte" aria-label="Compte de démonstration"><UserRound /></Link><Link className="icon-button bag-link" href="/panier" aria-label="Panier de démonstration"><ShoppingBag /><span className="bag-count">{hydrated ? cartCount : 0}</span></Link></div>
    </div>
    {megaOpen && <div id="mega-menu" className="mega-menu" ref={megaPanel}><div className="container-wide mega-content"><div><span className="eyebrow">DÉCOUVRIR</span><h2>La maison selon <em>vous.</em></h2><p>Parcourez les univers de cette boutique de démonstration.</p><Link href="/boutique" onClick={() => setMegaOpen(false)}>Voir tout le catalogue →</Link></div><div className="mega-links">{categories.map((category) => <Link key={category.slug} href={`/boutique?categorie=${category.slug}`} onClick={() => setMegaOpen(false)}>{category.name}<span>{category.description}</span></Link>)}</div><div className="mega-aside"><span>LA SÉLECTION DU MOMENT</span><strong>Des objets pour vos plus beaux instants.</strong><Link href="/boutique" onClick={() => setMegaOpen(false)}>Explorer →</Link></div></div></div>}
    {mobileOpen && <nav id="mobile-navigation" className="mobile-nav" ref={mobilePanel} aria-label="Navigation mobile"><Link href="/" onClick={() => setMobileOpen(false)}>Accueil</Link><Link href="/boutique" onClick={() => setMobileOpen(false)}>Toute la boutique</Link>{categories.map((category) => <Link key={category.slug} href={`/boutique?categorie=${category.slug}`} onClick={() => setMobileOpen(false)}>{category.name}</Link>)}<Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link><Link href="/favoris" onClick={() => setMobileOpen(false)}>Favoris</Link><Link href="/recherche" onClick={() => setMobileOpen(false)}>Recherche</Link>{soon.map(({ label, icon: Icon }) => <span className="mobile-disabled" key={label}><Icon size={17} aria-hidden="true" />{label}</span>)}</nav>}
  </header>;
}
