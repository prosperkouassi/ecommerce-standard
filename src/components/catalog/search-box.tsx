'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { products } from '@/data/catalog';
export function SearchBox(){const [term,setTerm]=useState('');const router=useRouter();const matches=term.trim().length>=2?products.filter((product)=>product.name.toLocaleLowerCase('fr').includes(term.toLocaleLowerCase('fr'))).slice(0,5):[];return <div className="search-box"><form onSubmit={(event)=>{event.preventDefault();router.push(`/recherche?q=${encodeURIComponent(term.trim())}`)}}><label htmlFor="site-search">Rechercher un produit fictif</label><div><input id="site-search" type="search" value={term} onChange={(event)=>setTerm(event.target.value)} maxLength={80} placeholder="Essayez « Lampe » ou « Vase »"/><button className="button button-dark" type="submit">Rechercher</button></div></form>{term.trim().length>=2&&<div className="search-suggestions" aria-live="polite"><strong>Suggestions</strong>{matches.length?matches.map((p)=><Link key={p.id} href={`/produit/${p.slug}`}>{p.name} →</Link>):<p>Aucune suggestion</p>}</div>}</div>}
