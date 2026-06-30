import type { Metadata } from "next";
import Link from "next/link";
import {
  activeCodes,
  editorialSignals,
  faqs,
  guideClusters,
  heroMetrics,
  officialLinks,
  siteConfig,
  toolCards,
  videoGuides
} from "@/data/site";
import { tierRows, wikiSections } from "@/data/paper-plane-content";
import { FaqJsonLd, SoftwareApplicationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SectionHeader, TrustNote } from "@/components/ui/content";
import { BrandHero } from "@/components/home/BrandHero";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes, Wiki, Tier List, Trello, Discord & Calculator`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: `${siteConfig.gameName} Codes, Wiki, Tier List, Trello, Discord & Calculator`,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: "website",
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes, Wiki, Tier List, Trello, Discord & Calculator`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function HomePage() {
  return (
    <main>
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.home} />

      <BrandHero />

      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] px-4 py-4">
              <div className="text-2xl font-bold text-[color:var(--accent)]">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.label}</div>
              <div className="mt-1 text-sm text-white/60">{metric.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Codes"
            title={`${siteConfig.gameName} codes last checked`}
            copy="The codes page tracks active codes, expired codes, redeem steps, source policy, and update log. No code is published unless it is official or live-tested."
          />
          <Link className="button-secondary" href="/codes">
            View all codes
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {activeCodes.slice(0, 4).map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex items-center justify-between gap-3">
                <span className="status-pill">{code.status}</span>
                <span className="text-xs text-white/50">{code.addedDate}</span>
              </div>
              <h3 className="mt-4 font-mono text-xl font-bold text-[color:var(--accent)]">{code.code}</h3>
              <p className="mt-2 text-sm text-white/65">{code.reward}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Tier list"
            title="Ranked progression priorities"
            copy="This ranking focuses on what actually moves a Paper Plane for Brainrots account forward: Brainrot income, throw-power breakpoints, floor unlocks, and rebirth timing."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {tierRows.slice(0, 4).map((item) => (
              <Link key={item.name} href="/tier-list" className="content-card">
                <div className="flex items-center justify-between">
                  <span className="tier-badge">{item.tier}</span>
                  <span className="text-sm text-white/50">#{item.rank}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-white/65">{item.why}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Core tools"
          title="Tools players can use immediately"
          copy="Start with codes, wiki, tier list, Trello, Discord, calculator, and guide pages before spending money on weights, floors, or a rebirth route."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {toolCards.map((tool) => (
            <Link key={tool.href} href={tool.href} className="content-card">
              <span className="mini-label">{tool.eyebrow}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm text-white/65">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Guides"
              title="Paper plane progression guide"
              copy="Use the guide when you need a practical route for first throws, Brainrot income, weight upgrades, floor unlocks, and rebirth prep."
            />
            <div className="mt-6 grid gap-3">
              {guideClusters.map((guide) => (
                <Link key={guide.href} href={guide.href} className="row-link">
                  <span>
                    <strong>{guide.title}</strong>
                    <small>{guide.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Wiki coverage"
              title="Wiki topics that match player searches"
              copy="Paper Plane for Brainrots searches are mostly about codes, Brainrots, throw distance, weights, floors, Trello, Discord, and upgrade routes."
            />
            <div className="mt-6 grid gap-3">
              {wikiSections.slice(0, 5).map((item) => (
                <Link key={item.title} href="/wiki" className="row-link">
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.summary}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Source check"
          title="Roblox, Trello, Discord, and wiki source status"
          copy="Use source status pages to separate official facts from community reports. This matters for codes, Brainrot stats, tier-list changes, and update notes."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{link.title}</h3>
                <p className="mt-2 text-sm text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {editorialSignals.map((signal) => (
            <TrustNote key={signal.title} title={signal.title} body={signal.body} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader
            eyebrow="Long-tail coverage"
            title="Mechanics to expand next"
            copy="The strongest next pages are named Brainrot index entries, update notes, floor costs, weight tables, rebirth requirements, and verified Discord or Trello links."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {videoGuides.map((video) => (
              <Link key={video.href} href={video.href} className="content-card">
                <span className="mini-label">{video.source ?? video.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{video.title}</h3>
                <p className="mt-2 text-sm text-white/65">{video.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="FAQ"
          title={`${siteConfig.gameName} quick answers`}
          copy="Quick answers for Paper Plane for Brainrots codes, wiki status, tier list rankings, and progression planning."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.home.map((faq) => (
            <article key={faq.q} className="content-card">
              <h3 className="text-lg font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
