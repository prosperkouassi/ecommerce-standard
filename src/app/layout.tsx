import type { Metadata } from "next";
import { SiteHeader } from "@/components/storefront/header";
import { SiteFooter } from "@/components/storefront/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "MAISON NOVA | L'art de vivre à votre façon", template: "%s | MAISON NOVA" },
  description: "Maison Nova, boutique lifestyle fictive : découvrez une expérience e-commerce de démonstration conçue par AlteractWeb. Aucune commande réelle.",
  robots: { index: false, follow: false },
  openGraph: { title: "MAISON NOVA — boutique de démonstration", description: "Une expérience e-commerce fictive imaginée par AlteractWeb.", locale: "fr_CI", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a><div className="demo-strip">Site de démonstration — aucune commande réelle</div><SiteHeader />{children}<SiteFooter /></body></html>;
}
