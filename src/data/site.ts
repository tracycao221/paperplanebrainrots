import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} codes, wiki, tier list, Trello, Discord, calculator, Brainrots, paper plane progression, upgrades, floors, and rebirth guide.`,
  valueProposition: `Find checked ${gameConfig.name} codes, plan paper plane progression, compare Brainrot income priorities, and use the calculator before spending money on weights, floors, or rebirth prep.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-30",
  freshnessLabel: "codes, Brainrots, throw power, floors, upgrades, rebirth, Trello, and Discord status checked",
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
    `${gameConfig.name} discord`,
    `${gameConfig.name} brainrots`,
    `${gameConfig.name} rebirth`,
    `${gameConfig.name} upgrades`,
    `${gameConfig.name} floors`,
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
        { label: "Active Codes", href: "/codes", description: "Last checked, active codes, expired codes, and redeem steps." },
        { label: "How to Redeem", href: "/codes#how-to-redeem", description: "Where the code box should appear if the game supports codes." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Ranked Brainrot income and progression priorities." },
        { label: "Calculator", href: "/calculator", description: "Plan weights, floors, distance, and farming time." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Brainrots, throws, weights, floors, and rebirth notes." },
        { label: "Guide", href: "/guide", description: "Beginner route, progression path, and upgrade planning." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and source status." }
      ]
    },
    {
      label: "Discord",
      href: "/discord",
      items: [
        { label: "Discord Status", href: "/discord", description: "Check whether an official invite is verified." },
        { label: "Trello Status", href: "/trello", description: "Check official Trello and source status." }
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
  { href: "/codes", label: "Codes" },
  { href: "/wiki", label: "Wiki" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/calculator", label: "Calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Checked", note: "No verified active code is published yet" },
  { label: "Core pages", value: "7", note: "Codes, wiki, tier list, Trello, Discord, calculator, guide" },
  { label: "Main loop", value: "Throw", note: "Paper plane distance unlocks better Brainrot routes" },
  { label: "Progression", value: "Upgrade", note: "Weights, floors, income, and rebirth planning" }
];

export const activeCodes: GameCode[] = [
  { code: "No verified active codes", reward: "No official or live-tested Paper Plane for Brainrots code is confirmed yet.", status: "Needs check", addedDate: "Last checked 2026-06-30" }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Planner",
    description: "Estimate money, weights, distance gains, and the next floor decision."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Rank Brainrot income, floor unlocks, throw-power breakpoints, and rebirth prep."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Last checked status, active codes, expired codes, redeem steps, and update log."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, Roblox, and source status."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guide#beginner-route",
    eyebrow: "Guide",
    description: "First-session route for Brainrot income, weights, and early floors."
  },
  {
    title: "Progression guide",
    href: "/guide#paper-plane-progression",
    eyebrow: "Guide",
    description: "When to buy weights, save for floors, or push a new throw distance band."
  },
  {
    title: "Rebirth guide",
    href: "/guide#rebirth-upgrades",
    eyebrow: "Guide",
    description: "How to think about rebirth timing, persistent boosts, and reset value."
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
    title: "Brainrot income index",
    href: "/wiki",
    eyebrow: "Expansion",
    description: "Add verified named Brainrots with income, catch distance, floor, and replacement timing."
  },
  {
    title: "Floor and weight table",
    href: "/calculator",
    eyebrow: "Expansion",
    description: "Turn verified floor costs and weight gains into calculator defaults."
  },
  {
    title: "Rebirth requirement tracker",
    href: "/guide#rebirth-upgrades",
    eyebrow: "Expansion",
    description: "Document rebirth requirements and persistent boosts after live verification."
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
      a: "Start with codes, tier list, Trello and Discord status, calculator, guide, wiki hub, and sources. Add named Brainrot pages after research confirms income, floors, and catch distance."
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
      a: "Add named Brainrot rows only after live checks confirm income, catch distance, floor unlocks, or creator-owned update notes. Until then, rank the progression decisions players can verify."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
