import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { guideCards } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guide - Beginner Route, Upgrades, Floors & Rebirth`,
  description: `${siteConfig.gameName} guide for beginners, Brainrot income, paper plane progression, weights, floors, upgrades, farming, and rebirth planning.`,
  alternates: { canonical: `${siteConfig.domain}/guide` },
  openGraph: {
    title: `${siteConfig.gameName} Guide - Beginner Route, Upgrades, Floors & Rebirth`,
    description: `${siteConfig.gameName} guide for beginners, Brainrot income, paper plane progression, weights, floors, upgrades, farming, and rebirth planning.`,
    url: `${siteConfig.domain}/guide`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Guide - Beginner Route, Upgrades, Floors & Rebirth`,
    description: `${siteConfig.gameName} guide for beginners, Brainrot income, paper plane progression, weights, floors, upgrades, farming, and rebirth planning.`,
    images: ["/opengraph-image"]
  }
};

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guide", href: "/guide" }]} />
      <Breadcrumbs items={[{ label: "Guide", href: "/guide" }]} />
      <PageIntro
        eyebrow="Progression guide"
        title={`${siteConfig.gameName} Guide`}
        description="A practical route for Paper Plane for Brainrots players: start income, upgrade throw power, unlock floors, compare Brainrot farming value, and prepare for rebirth without wasting money."
      />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {guideCards.map((card) => (
          <Link key={card.href} href={card.href} className="content-card">
            <span className="mini-label">Guide</span>
            <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
          </Link>
        ))}
      </section>

      <section id="beginner-route" className="mt-10">
        <SectionHeader
          eyebrow="Beginner route"
          title="What to do first in Paper Plane for Brainrots"
          copy="The first goal is not a perfect build. It is a stable money loop that lets every new throw, weight upgrade, and floor purchase happen faster."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">1. Catch a reliable Brainrot</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Prioritize a Brainrot you can catch repeatedly with your current throw distance. A consistent income source is better than chasing a far target that fails most runs.</p>
          </article>
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">2. Place income before over-upgrading</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Once a Brainrot produces money, use that income to fund weights and floor goals. Do not spend every coin before checking whether the next floor is close.</p>
          </article>
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">3. Test distance after upgrades</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Buy weights in small batches and throw again. The important moment is when a new distance band unlocks a better catch, not when one small number increases.</p>
          </article>
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">4. Save when a floor is close</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">If the next floor is within a short farm, saving may beat buying another weight. A new floor can change the best route and the best Brainrot target.</p>
          </article>
        </div>
      </section>

      <section id="paper-plane-progression" className="mt-10">
        <SectionHeader
          eyebrow="Paper plane progression"
          title="Weights, throw power, distance, and floors"
          copy="Use distance breakpoints to decide what to buy next. The best upgrade is the one that unlocks a better route, not always the cheapest available button."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Weights</span>
            <h2 className="mt-3 text-xl font-bold text-white">Buy for breakpoints</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Weights matter when they move your average throw far enough to reach a better Brainrot or route.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Floors</span>
            <h2 className="mt-3 text-xl font-bold text-white">Buy for new routes</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">A floor is strongest when your throw power can already take advantage of the new space.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Calculator</span>
            <h2 className="mt-3 text-xl font-bold text-white">Measure the gap</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Use the calculator to compare farm time, weight costs, distance gain, and the next floor price.</p>
          </article>
        </div>
      </section>

      <section id="rebirth-upgrades" className="mt-10">
        <SectionHeader
          eyebrow="Rebirth and upgrades"
          title="When to think about rebirth"
          copy="If rebirth is available in your current version, treat it as a long-term scaling decision. Confirm requirements in-game before resetting."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">Rebirth is about cycle speed</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">A good rebirth happens when the next cycle becomes faster than staying in the current one. Check whether boosts persist and how quickly you can rebuild income.</p>
          </article>
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">Do not reset blindly</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Before rebirthing, write down floor progress, income, distance, and upgrade costs. If the boost is unclear, wait until the value is verified.</p>
          </article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Check codes</Link>
        <Link href="/tier-list" className="button-secondary">View tier list</Link>
        <Link href="/calculator" className="button-secondary">Use calculator</Link>
      </div>
    </main>
  );
}
