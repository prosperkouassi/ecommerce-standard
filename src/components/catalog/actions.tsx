'use client';
import { Heart, GitCompareArrows } from 'lucide-react';
import { useShop } from '@/stores/shop';
export function ProductActions({ id }: { id: string }) {
 const favorite = useShop((s) => s.favorites.includes(id)); const compared = useShop((s) => s.compared.includes(id));
 const toggleFavorite = useShop((s) => s.toggleFavorite); const toggleCompare = useShop((s) => s.toggleCompare);
 return <div className="product-actions"><button type="button" onClick={() => toggleFavorite(id)} aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'} aria-pressed={favorite}><Heart size={17} fill={favorite ? 'currentColor' : 'none'} /></button><button type="button" onClick={() => toggleCompare(id)} aria-label={compared ? 'Retirer du comparateur' : 'Ajouter au comparateur'} aria-pressed={compared}><GitCompareArrows size={17} /></button></div>;
}
