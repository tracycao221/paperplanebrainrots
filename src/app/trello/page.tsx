import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { trelloDiscordRows } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
  description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
  alternates: { canonical: `${siteConfig.domain}/trello` },
  openGraph: {
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Check verified and unverified ${siteConfig.gameName} Roblox, Trello, Discord, wiki, codes, and update sources.`,
    url: `${siteConfig.domain}/trello`,
    images: [`${siteConfig.domain}/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Check verified and unverified ${siteConfig.gameName} Roblox, Trello, Discord, wiki, codes, and update sources.`,
    images: [`${siteConfig.domain}/opengraph-image`]
  }
};

export default function TrelloStatusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trello, Discord & Wiki", href: "/trello" }]} />
      <Breadcrumbs items={[{ label: "Trello, Discord & Wiki", href: "/trello" }]} />
      <PageIntro
        eyebrow="Community status"
        title={`${siteConfig.gameName} Trello, Discord & Wiki Status`}
        description={`Use this page to check which ${siteConfig.gameName} community sources are official, which still need verification, and where to confirm codes, updates, and tier-list changes.`}
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Official links"
          title="Source status"
          copy="This page should be updated only after creator-owned links are confirmed. Until then, uncertain Trello and Discord links stay clearly labelled."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {trelloDiscordRows.map((item) => {
            const isInternal = item.href.startsWith("/");
            const hasLink = item.href !== "#";
            const content = (
              <>
                <span className="mini-label">{item.status}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.note}</p>
              </>
            );

            if (!hasLink) {
              return (
                <article key={item.label} className="content-card">
                  {content}
                </article>
              );
            }

            return isInternal ? (
              <Link key={item.label} href={item.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/discord" className="content-card">
          <span className="mini-label">Discord</span>
          <h2 className="mt-3 text-xl font-bold text-white">Discord verification</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check whether an official Discord invite has been confirmed and how to avoid random reposted links.</p>
        </Link>
        <Link href="/codes" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes verification</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active and expired rewards against official update surfaces before publishing code claims.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Meta</span>
          <h2 className="mt-3 text-xl font-bold text-white">Tier-list sources</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use Discord, update notes, and wiki data as signals, then label ranking confidence clearly.</p>
        </Link>
      </section>
    </main>
  );
}
