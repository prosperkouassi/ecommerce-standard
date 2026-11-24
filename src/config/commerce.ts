export type ShippingId = 'yango_delivery' | 'store_pickup';
export type PaymentId = 'cinetpay' | 'cash_on_delivery' | 'pay_at_pickup';
export const demoConfig = {
 demo: true,
 shipping: [
  { id: 'yango_delivery' as const, name: 'Livraison Yango (simulation)', description: 'Estimation fictive, aucun appel au service Yango.', fee: 3500, enabled: true, order: 1 },
  { id: 'store_pickup' as const, name: 'Retrait en magasin (simulation)', description: 'Adresse et horaires fictifs : Maison Nova Démo, Grand-Bassam, lundi–samedi 9h–18h.', fee: 0, enabled: true, order: 2 },
 ],
 payments: [
  { id: 'cinetpay' as const, name: 'CinetPay (simulation uniquement)', description: 'Aucun paiement effectué et aucune donnée bancaire demandée.', enabled: true, shipping: ['yango_delivery','store_pickup'] as ShippingId[], order: 1 },
  { id: 'cash_on_delivery' as const, name: 'Paiement à la livraison (simulation)', description: 'Aucun encaissement réel.', enabled: true, shipping: ['yango_delivery'] as ShippingId[], order: 2 },
  { id: 'pay_at_pickup' as const, name: 'Paiement au retrait (simulation)', description: 'Aucun encaissement réel.', enabled: true, shipping: ['store_pickup'] as ShippingId[], order: 3 },
 ],
};
export const eligiblePayments=(shipping:ShippingId)=>demoConfig.payments.filter((method)=>method.enabled&&method.shipping.includes(shipping));
