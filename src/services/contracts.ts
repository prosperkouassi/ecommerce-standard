import type { PaymentId, ShippingId } from '@/config/commerce';
export type PaymentResult = { reference: string; status: 'succeeded'|'declined'|'cancelled' };
export interface PaymentProvider { initiate(orderReference:string, amountFcfa:number):Promise<PaymentResult>; verify(reference:string):Promise<PaymentResult>; }
export interface ShippingProvider { id: ShippingId; estimate(commune:string):Promise<{ amountFcfa:number; simulated:boolean }>; }
export interface CatalogRepository<T> { list():Promise<T[]>; findBySlug(slug:string):Promise<T|undefined>; }
export interface DemoCheckout { delivery:ShippingId; payment:PaymentId; amountFcfa:number; }
// No real provider or endpoint is enabled. A production implementation must verify payments on the server.
