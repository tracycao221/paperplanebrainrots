import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Calculator - Money, Weights, Distance & Floors`,
  description: `Use the ${siteConfig.gameName} calculator to estimate money, Brainrot income, farming time, weight upgrades, throw distance, floor gap, and progression decisions.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Calculator`}
        description="Estimate money after farming, affordable weight upgrades, throw-distance gain, and the gap to the next floor. Replace the default numbers with your current Brainrot income, upgrade cost, and floor target."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
