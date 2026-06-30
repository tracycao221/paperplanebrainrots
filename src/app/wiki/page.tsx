import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { wikiSections } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki - Brainrots, Throws, Weights, Floors & Rebirth`,
  description: `${siteConfig.gameName} wiki for Brainrots, paper plane throws, weights, upgrades, floors, money farming, rebirth, codes, Trello, and Discord status.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this wiki hub for Paper Plane for Brainrots mechanics: paper plane throws, Brainrots, money income, weights, upgrades, floors, rebirth planning, codes, Trello, Discord, and source status."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Paper Plane for Brainrots mechanics"
          copy="These sections are written around real player decisions. Named Brainrot stats should be added only after live checks confirm income, floor, and catch data."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {wikiSections.map((section) => (
            <article key={section.title} className="content-card">
              <span className="mini-label">Wiki</span>
              <h2 className="mt-3 text-xl font-bold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{section.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/62">
                {section.details.map((detail) => (
                  <li key={detail}>- {detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes and rewards</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active codes, expired codes, redeem steps, and update log.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Tier list</span>
          <h2 className="mt-3 text-xl font-bold text-white">Brainrot and progression rankings</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Compare income priorities, floor timing, throw-power breakpoints, and rebirth prep.</p>
        </Link>
        <Link href="/calculator" className="content-card">
          <span className="mini-label">Calculator</span>
          <h2 className="mt-3 text-xl font-bold text-white">Distance and money planner</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Estimate farming time, weight upgrades, distance gain, and floor gap.</p>
        </Link>
      </section>
    </main>
  );
}
