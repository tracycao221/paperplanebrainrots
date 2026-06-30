import type { Metadata } from "next";
import Link from "next/link";
import { faqs, siteConfig } from "@/data/site";
import { lastChecked, tierRows } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Tier List - Brainrots, Upgrades, Floors & Rebirth`,
  description: `Ranked ${siteConfig.gameName} tier list for Brainrot income, paper plane throw power, weight upgrades, floors, farming, and rebirth planning.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: `${siteConfig.gameName} Tier List - Brainrots, Upgrades, Floors & Rebirth`,
    description: `Ranked ${siteConfig.gameName} tier list for Brainrot income, paper plane throw power, weight upgrades, floors, farming, and rebirth planning.`,
    url: `${siteConfig.domain}/tier-list`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Tier List - Brainrots, Upgrades, Floors & Rebirth`,
    description: `Ranked ${siteConfig.gameName} tier list for Brainrot income, paper plane throw power, weight upgrades, floors, farming, and rebirth planning.`,
    images: ["/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqs.tierList} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow="Tier list"
        title={`${siteConfig.gameName} Tier List`}
        description="A practical, indexable ranking for Paper Plane for Brainrots progression. Because verified named Brainrot stat tables are still limited, this tier list ranks the choices players actually make: best income Brainrot, floor timing, weight breakpoints, starter farming, and rebirth prep."
      />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">{lastChecked}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Rankings should be refreshed after updates, new Brainrot income data, floor cost changes, or rebirth requirement checks.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Income, distance, unlock cost, and reset value</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">A pick ranks higher when it gives more money per minute, unlocks farther throws, opens a better floor, or speeds up the next rebirth cycle.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">No fake named stats</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Named Brainrots should be added only after in-game checks or reliable creator-owned sources confirm income and unlock data.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Rankings"
          title="Best Paper Plane for Brainrots progression picks"
          copy="Use this as a current ranking of decisions, not a fake list of unverified Brainrot names. Each row explains when the option is worth prioritizing."
        />
        <div className="mt-6 grid gap-4">
          {tierRows.map((item) => (
            <article key={item.name} className="content-card">
              <div className="flex flex-wrap items-center gap-4">
                <span className="tier-badge">{item.tier}</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">#{item.rank} {item.name}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.intent} - {item.bestFor}</p>
                </div>
                <span className="status-pill">{item.confidence}</span>
              </div>
              <p className="mt-4 max-w-4xl text-white/68">{item.why}</p>
              <p className="mt-3 text-sm text-white/60">Upgrade tip: {item.upgradeTip}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Best beginner priority</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Catch any reliable income Brainrot, place it, and avoid spending every coin on tiny weight upgrades before the route changes.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Best farming priority</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Farm the highest income Brainrot you can catch repeatedly. Consistency beats a rare catch that wastes most throws.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Best late-game priority</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Compare rebirth value, persistent boosts, and next-floor cost instead of only chasing one more distance upgrade.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Next checks"
          title="How this tier list should become more specific"
          copy="As soon as named Brainrot income data is verified, add rows for exact names, income per second, unlock floor, catch distance, and best replacement timing."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/guide" className="content-card">
            <span className="mini-label">Guide</span>
            <h3 className="mt-3 text-lg font-bold text-white">Follow the progression route</h3>
            <p className="mt-2 text-sm text-white/66">Use the guide to decide when to buy weights, save for floors, or prepare for rebirth.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read entity details</h3>
            <p className="mt-2 text-sm text-white/66">Use wiki pages for unlock paths, abilities, traits, and source-backed notes on each ranked pick.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Sources</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check evidence</h3>
            <p className="mt-2 text-sm text-white/66">Use source notes when creator videos, wiki pages, or community reports disagree.</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Get codes</Link>
        <Link href="/calculator" className="button-secondary">Use the calculator</Link>
        <Link href="/trello" className="button-secondary">Check source status</Link>
      </div>
    </main>
  );
}
