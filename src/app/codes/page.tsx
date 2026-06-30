import type { Metadata } from "next";
import { faqs, siteConfig } from "@/data/site";
import { activeCodeRows, codeSources, codeUpdateLog, expiredCodeRows, lastChecked, redeemSteps } from "@/data/paper-plane-content";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes - Last Checked, Active & Expired Codes`,
  description: `${siteConfig.gameName} codes page with last checked date, active codes, expired codes, how to redeem, where to find new codes, and update log.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes - Last Checked, Active & Expired Codes`,
    description: `${siteConfig.gameName} codes page with last checked date, active codes, expired codes, how to redeem, where to find new codes, and update log.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes - Last Checked, Active & Expired Codes`,
    description: `${siteConfig.gameName} codes page with last checked date, active codes, expired codes, how to redeem, where to find new codes, and update log.`,
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes`}
        description="Last checked code status for Paper Plane for Brainrots. We do not invent codes: a code only appears as active after an official source or live redemption test confirms it."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Last checked</p>
            <p className="mt-2 text-xl font-extrabold text-white">{lastChecked}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Active codes</p>
            <p className="mt-2 text-xl font-extrabold text-white">0 verified</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Policy</p>
            <p className="mt-2 text-xl font-extrabold text-white">No fake codes</p>
          </div>
        </div>
      </PageIntro>

      <section id="active-codes" className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Active Paper Plane for Brainrots codes"
          copy="No verified active code is available right now. This table stays honest until a working code is confirmed."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodeRows.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Last checked: {code.lastChecked}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="expired-codes" className="mt-10">
        <SectionHeader
          eyebrow="Expired list"
          title="Expired Paper Plane for Brainrots codes"
          copy="Expired codes are useful for searchers, but only real previously working codes should be added here."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {expiredCodeRows.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-white">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Last checked: {code.lastChecked}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-to-redeem" className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem Paper Plane for Brainrots codes"
            copy="A code box has not been confirmed in every public source. Use these steps only if the game shows a code or reward input."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            {redeemSteps.map((step, index) => (
              <li key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="New codes"
            title="Where to find new codes"
            copy="The safest sources are creator-owned channels. Community posts can help discovery, but they should not be treated as verified until tested."
          />
          <ul className="mt-5 grid gap-3 text-white/70">
            {codeSources.map((source) => (
              <li key={source}>- {source}</li>
            ))}
          </ul>
        </article>
      </section>

      <section id="update-log" className="mt-10">
        <SectionHeader
          eyebrow="Update log"
          title="Codes page update log"
          copy="Every code check should leave a short trail so readers know what changed and when."
        />
        <div className="mt-6 grid gap-4">
          {codeUpdateLog.map((entry) => (
            <article key={entry.note} className="content-card">
              <span className="mini-label">{entry.date}</span>
              <p className="mt-3 text-white/70">{entry.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
