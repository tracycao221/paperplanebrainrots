import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { trelloDiscordRows } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Discord - Official Invite Status & Sources`,
  description: `Check ${siteConfig.gameName} Discord status, official invite verification, Roblox source links, Trello status, codes, updates, and wiki references.`,
  alternates: { canonical: `${siteConfig.domain}/discord` },
  openGraph: {
    title: `${siteConfig.gameName} Discord - Official Invite Status & Sources`,
    description: `Check ${siteConfig.gameName} Discord status, official invite verification, Roblox source links, Trello status, codes, updates, and wiki references.`,
    url: `${siteConfig.domain}/discord`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Discord - Official Invite Status & Sources`,
    description: `Check ${siteConfig.gameName} Discord status, official invite verification, Roblox source links, Trello status, codes, updates, and wiki references.`,
    images: ["/opengraph-image"]
  }
};

export default function DiscordPage() {
  const discordRow = trelloDiscordRows.find((row) => row.label === "Official Discord");

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Discord", href: "/discord" }]} />
      <Breadcrumbs items={[{ label: "Discord", href: "/discord" }]} />
      <PageIntro
        eyebrow="Discord status"
        title={`${siteConfig.gameName} Discord`}
        description="This page tracks whether a verified official Paper Plane for Brainrots Discord invite is available. We do not link random reposted invites because they can be outdated, unsafe, or unrelated."
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="content-card">
          <span className="mini-label">{discordRow?.status ?? "Not verified yet"}</span>
          <h2 className="mt-3 text-2xl font-extrabold text-white">Official Discord invite</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">{discordRow?.note}</p>
          <p className="mt-4 text-sm leading-6 text-white/55">If the creator publishes an official invite on Roblox, in-game UI, or another creator-owned channel, this page should be updated with the link and checked date.</p>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="How to verify"
            title="Before trusting a Discord link"
            copy="Use this checklist before treating a server as official."
          />
          <ul className="mt-5 grid gap-3 text-white/70">
            <li>- The invite is linked from the official Roblox game page or inside the game.</li>
            <li>- The server name and owner match the creator or official community branding.</li>
            <li>- Code or update announcements match what players can verify in-game.</li>
            <li>- The invite is not only reposted by a third-party codes site.</li>
          </ul>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related sources"
          title="Where to check next"
          copy="Discord is only one source. Use Roblox, Trello status, codes, wiki, and calculator pages together when planning updates or progression."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/trello" className="content-card">
            <span className="mini-label">Trello</span>
            <h2 className="mt-3 text-xl font-bold text-white">Trello status</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Check whether an official Trello board is verified.</p>
          </Link>
          <Link href="/codes" className="content-card">
            <span className="mini-label">Codes</span>
            <h2 className="mt-3 text-xl font-bold text-white">Codes status</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">See active codes, expired codes, redeem steps, and update log.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h2 className="mt-3 text-xl font-bold text-white">Mechanics wiki</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Read about Brainrots, throws, weights, floors, and rebirth planning.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
