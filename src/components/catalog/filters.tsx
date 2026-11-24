'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data/catalog';
import type { CatalogQuery } from '@/lib/catalog';
export function CatalogFilters({ current, base = '/boutique' }: { current: CatalogQuery; base?: string }) {
 const [open, setOpen] = useState(false); const router = useRouter();
 function submit(form: FormData) { const params = new URLSearchParams(); for (const [key, raw] of form) { const value = String(raw).trim(); if (value) params.set(key, value); } router.push(`${base}${params.size ? `?${params}` : ''}`); setOpen(false); }
 return <div className="catalog-filter-wrap"><button className="filter-toggle" type="button" aria-expanded={open} aria-controls="catalog-filters" onClick={() => setOpen(!open)}>Filtres {open ? '−' : '+'}</button><form id="catalog-filters" className={`catalog-filters ${open ? 'filters-open' : ''}`} action={submit}>
 <label>Recherche<input type="search" name="q" defaultValue={current.q ?? ''} placeholder="Nom du produit" maxLength={80} /></label>
 {!base.startsWith('/categorie/') && <label>Catégorie<select name="categorie" defaultValue={current.categorie ?? ''}><option value="">Toutes</option>{categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select></label>}
 <label>Marque<select name="marque" defaultValue={current.marque ?? ''}><option value="">Toutes</option><option>Maison Nova</option><option>Atelier Nova</option></select></label>
 <label>Couleur<select name="couleur" defaultValue={current.couleur ?? ''}><option value="">Toutes</option>{['Sable','Terracotta','Écru','Naturel'].map((color) => <option key={color}>{color}</option>)}</select></label>
 <div className="filter-range"><label>Prix minimum<input type="number" name="min" min="0" max="500000" step="500" defaultValue={current.min ?? ''} /></label><label>Prix maximum<input type="number" name="max" min="0" max="500000" step="500" defaultValue={current.max ?? ''} /></label></div>
 <label className="filter-checkbox"><input type="checkbox" name="disponible" value="1" defaultChecked={current.disponible === '1'} /> Disponible uniquement</label>
 <label>Trier par<select name="tri" defaultValue={current.tri ?? 'popularite'}><option value="popularite">Popularité</option><option value="nouveautes">Nouveautés</option><option value="prix-asc">Prix croissant</option><option value="prix-desc">Prix décroissant</option></select></label>
 <div className="filter-controls"><button type="submit" className="button button-dark">Appliquer</button><button type="button" onClick={() => {router.push(base);setOpen(false)}}>Réinitialiser</button></div></form></div>;
}
