import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { pages } from "@/data/pages";
import { ContactForm } from "@/components/marketing/contact-form";

type SectionParams = Promise<{ section: string }>;

export function generateStaticParams() {
  return Object.keys(pages).map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: SectionParams }): Promise<Metadata> {
  const page = pages[(await params).section];
  return {
    title: page?.title ?? "Page",
    description: page?.intro,
    robots: { index: false, follow: false },
  };
}

async function SectionContent({ params }: { params: SectionParams }) {
  const { section } = await params;
  const page = pages[section];
  if (!page) notFound();

  return (
    <main id="contenu" className="container-wide listing-page info-page">
      <nav className="crumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link> / {page.title}</nav>
      <span className="eyebrow">MAISON NOVA · DÉMONSTRATION</span>
      <h1>{page.title}</h1>
      <p>{page.intro}</p>
      {page.legal && <p className="legal-notice">Document fictif. Il ne constitue ni des conditions contractuelles ni une validation juridique.</p>}
      {section === "faq" ? (
        <div className="faq-list">
          {page.sections.map((item) => <details key={item.heading}><summary>{item.heading}</summary><p>{item.body}</p></details>)}
        </div>
      ) : (
        page.sections.map((item) => <section key={item.heading}><h2>{item.heading}</h2><p>{item.body}</p></section>)
      )}
      {section === "contact" && <ContactForm />}
    </main>
  );
}

export default function Page({ params }: { params: SectionParams }) {
  return (
    <Suspense fallback={<main id="contenu" className="container-wide listing-page" role="status">Chargement de la page…</main>}>
      <SectionContent params={params} />
    </Suspense>
  );
}
