import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with active codes, tier list rankings, Trello and Discord status, calculators, guides, and source-backed Roblox progression help.`,
  valueProposition: `Track active ${gameConfig.name} codes, compare the best picks, and use practical tools before you spend time grinding in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-30",
  freshnessLabel: "codes, source links, Brainrots, and calculator formulas under active checks",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Calculator", href: "/calculator", description: "Decision helper for builds or progression." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Guides", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Live", note: "Designed for frequent checks" },
  { label: "Core pages", value: "10", note: "Codes, tier list, Trello, tools, guides, wiki" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  { code: "No verified active codes yet", reward: "Checked sources did not confirm a working reward code.", status: "Needs check", addedDate: "Checked 2026-06-30" }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Early income Brainrot",
    tier: "B",
    role: "Starter placement",
    reason: "Prioritize the first Brainrot that reliably improves money per minute, then replace this row after names and income values are verified.",
    confidence: "Needs check",
    bestFor: ["beginner", "low investment"],
    sourceNote: "Replace with checked Roblox, creator, wiki, video, or community evidence.",
    teamNote: "Good starter picks should work without rare team pieces."
  },
  {
    name: "Distance helper",
    tier: "B",
    role: "Throw progression",
    reason: "A better throw-distance path should unlock catches and floors faster once upgrade math is confirmed.",
    confidence: "Needs check",
    bestFor: ["farming", "repeat runs"],
    sourceNote: "Replace with current creator videos, wiki notes, or verified community testing.",
    teamNote: "Pair farming picks with support or speed options when the game has team slots."
  },
  {
    name: "Floor income setup",
    tier: "C",
    role: "Later floors",
    reason: "Later-floor placements should be ranked only after floor costs, space, and Brainrot income are verified.",
    confidence: "Needs check",
    bestFor: ["late game", "bossing"],
    sourceNote: "Replace with cross-checked late-game, update, or boss-clear evidence.",
    teamNote: "Endgame picks need synergy notes before being ranked as final."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper that can later become a full formula-based calculator."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks the current best picks with notes for beginners, farming, and late-game use."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "First-session path, mistakes to avoid, and what to unlock first."
  },
  {
    title: "Progression guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "Mid-game priorities, resource planning, and farming routes."
  },
  {
    title: "Advanced strategy",
    href: "/guides",
    eyebrow: "Guide",
    description: "Late-game builds, boss prep, meta choices, or trading decisions."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Brainrots and income",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Track verified Brainrot names, income roles, and placement notes."
  },
  {
    title: "Dumbbells and floors",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Track upgrade costs, floor unlocks, and throw-distance effects."
  },
  {
    title: "Paper plane throws",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Collect distance, money, and formula notes as they are verified."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split major game entities into wiki pages when search demand exists instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Add a current creator guide only after it shows real Paper Plane for Brainrots gameplay."
  },
  {
    title: "Beginner route",
    href: "#",
    eyebrow: "Video",
    description: "Add a recent walkthrough for throwing farther, placing Brainrots, and buying dumbbells."
  },
  {
    title: "Meta showcase",
    href: "#",
    eyebrow: "Video",
    description: "Add ranking videos only when they support verified Brainrot or floor data."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, tier lists, calculators, guides, and source-backed progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, tier list, Trello/Discord status, calculator, beginner guide, wiki hub, and sources. Add entity pages after research confirms the game's real systems."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: "Why are some codes marked Needs check?",
      a: "Uncertain rewards stay clearly labeled so the page does not overstate verification."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Replace placeholder tiers with research-backed rankings, explain use cases, and split beginner, farming, and endgame recommendations when needed."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
