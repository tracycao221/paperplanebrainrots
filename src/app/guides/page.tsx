import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { guideCards } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides - Beginner, Progression, Upgrades & Rebirth`,
  description: `Guide hub for ${siteConfig.gameName} beginner route, paper plane progression, Brainrot income, weights, floors, upgrades, and rebirth planning.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this guide hub for beginner help, paper plane progression, Brainrot income, weight upgrades, floor timing, and rebirth planning."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real Paper Plane for Brainrots questions"
          copy="Pick the route that matches your current problem, then check codes, tier list, calculator notes, or wiki details before spending money on upgrades."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideCards.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">Guide</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
