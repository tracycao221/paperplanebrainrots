import { gameConfig } from "@/data/game.config";

export const lastChecked = "2026-06-30";

export const activeCodeRows = [
  {
    code: "No verified active codes",
    reward: "No working Paper Plane for Brainrots code has been confirmed from an official source or live test yet.",
    status: "No active code confirmed",
    lastChecked
  }
];

export const expiredCodeRows = [
  {
    code: "No verified expired codes",
    reward: "Keep this list empty until a real code is confirmed as expired.",
    status: "Nothing to list yet",
    lastChecked
  }
];

export const codeUpdateLog = [
  {
    date: lastChecked,
    note: "Checked the official Roblox game page and public search results. No reliable active code was confirmed, so no code was added."
  },
  {
    date: lastChecked,
    note: "Added a clearer code verification policy: only official announcements, creator-owned channels, or live redemption tests should move a code into the active table."
  }
];

export const redeemSteps = [
  "Open Paper Plane for Brainrots from the official Roblox game page.",
  "Finish any first-time tutorial step so the main UI is visible.",
  "Look for a Codes, Rewards, Shop, Settings, or Menu button. If there is no input box, the game may not support codes yet.",
  "Paste the code exactly as published and claim it once. Roblox codes are usually case-sensitive and time-limited.",
  "If the code fails, check for spelling, server age, update timing, and whether the code has already expired."
];

export const codeSources = [
  "Official Roblox game description and update text",
  "Creator-owned Discord announcements, if an official invite is published",
  "Creator-owned Trello or community board, if one is verified",
  "In-game update panels, event panels, and social reward menus",
  "Trusted community screenshots only after a live test confirms the reward"
];

export const tierRows = [
  {
    rank: 1,
    tier: "S",
    name: "Best income Brainrot you can reliably catch",
    intent: "Money per minute",
    bestFor: "Main farming setup",
    why: "Paper Plane for Brainrots progression depends on catching Brainrots and placing them for money. The best practical pick is the highest income Brainrot that your current throw distance can reach consistently, not a rare target you fail to catch most runs.",
    upgradeTip: "Upgrade weights until the next reliable catch range opens, then compare the new Brainrot income against the floor cost.",
    confidence: "Mechanic-backed"
  },
  {
    rank: 2,
    tier: "A",
    name: "Next-floor unlock path",
    intent: "Progression gate",
    bestFor: "Unlocking farther routes",
    why: "Floors expand the route and can expose better catches. If the next floor is close, saving money can beat buying small upgrades that do not unlock a new catch target.",
    upgradeTip: "Use the calculator to compare floor cost against the money needed for enough weight upgrades to reach a new Brainrot.",
    confidence: "Mechanic-backed"
  },
  {
    rank: 3,
    tier: "A",
    name: "Weight and throw-power breakpoints",
    intent: "Distance scaling",
    bestFor: "Reaching higher-value Brainrots",
    why: "Weights increase throw power, which is the core route to farther paper plane throws. Breakpoints matter more than tiny gains because a new distance band can change which Brainrots are worth farming.",
    upgradeTip: "Buy weights in small groups, test distance, then stop when the next floor or rebirth goal becomes more efficient.",
    confidence: "Mechanic-backed"
  },
  {
    rank: 4,
    tier: "B",
    name: "Starter Brainrot income setup",
    intent: "Early money",
    bestFor: "First session",
    why: "Early Brainrots are useful because they start passive income. Replace them quickly when a higher income-per-slot option becomes easy to catch.",
    upgradeTip: "Do not over-optimize starter placements. Use them to fund the first meaningful throw-power jump.",
    confidence: "Early-game safe"
  },
  {
    rank: 5,
    tier: "B",
    name: "Rebirth preparation route",
    intent: "Long-term scaling",
    bestFor: "Players close to reset rewards",
    why: "When rebirth or reset-style scaling is available, the best route can shift from short-term income to the fastest path that meets reset requirements.",
    upgradeTip: "Before rebirthing, note which upgrades reset and which boosts persist. Do not spend down into upgrades that disappear with no lasting benefit.",
    confidence: "Needs live check"
  },
  {
    rank: 6,
    tier: "C",
    name: "Low-income or cosmetic-only catches",
    intent: "Collection",
    bestFor: "Completionists",
    why: "Some catches may be fun to collect but weak for money. They should not outrank a lower-rarity Brainrot that produces better income for your current floor.",
    upgradeTip: "Collect after your money route is stable, not before the next meaningful throw-power or floor unlock.",
    confidence: "General rule"
  }
];

export const wikiSections = [
  {
    title: "Paper plane throws",
    summary: "The main action is throwing a paper plane as far as possible. Throw distance decides which zones, floors, and Brainrots you can reach.",
    details: ["Track your average distance, not only your best throw.", "Use weights to push into new distance bands.", "Retest after every floor unlock because route layout can change the value of a throw."]
  },
  {
    title: "Brainrots",
    summary: "Brainrots are the main progression target: catch them, place them, and use their income to fund more throw power.",
    details: ["Rank Brainrots by income you can actually sustain.", "A common Brainrot can be better than a rare one if it is easier to catch repeatedly.", "Keep a checked date beside any named Brainrot stats because values can change after updates."]
  },
  {
    title: "Weights and upgrades",
    summary: "Weights are the safest long-tail topic because they connect directly to throw power, distance, and the next catch tier.",
    details: ["Compare upgrade cost against the new Brainrot or floor it unlocks.", "Stop buying tiny upgrades when the next floor is within reach.", "Record distance gain per upgrade in the calculator for better decisions."]
  },
  {
    title: "Floors",
    summary: "Floors are progression gates that can open farther paths and better farming routes.",
    details: ["Save for a floor when it unlocks a new income route.", "Do not buy a floor blindly if your throw power cannot use it yet.", "Recheck the best Brainrot target after each floor unlock."]
  },
  {
    title: "Rebirth and reset planning",
    summary: "If rebirth is available, treat it as a separate route: short-term money may not be the same as fastest long-term scaling.",
    details: ["Confirm requirements before spending.", "Write down which boosts persist after reset.", "Do one final farming push only if it shortens the next cycle."]
  }
];

export const guideCards = [
  {
    title: "Beginner route",
    href: "/guide#beginner-route",
    description: "Start with reliable Brainrot income, then buy weights only when they improve your next catch range."
  },
  {
    title: "Paper plane progression",
    href: "/guide#paper-plane-progression",
    description: "Use throw-distance breakpoints to decide between weights, floors, and saving for the next route."
  },
  {
    title: "Rebirth and upgrades",
    href: "/guide#rebirth-upgrades",
    description: "Plan reset timing around persistent boosts and the fastest route back to strong income."
  }
];

export const trelloDiscordRows = [
  {
    label: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    status: "Verified official source",
    note: "Use this for the game title, creator-owned public update text, badges, visits, and availability."
  },
  {
    label: "Official Discord",
    href: gameConfig.dataSources.discord ?? "#",
    status: "Not verified yet",
    note: "Do not trust random Discord invites. Add the link only if it is published by the creator or inside the game."
  },
  {
    label: "Official Trello",
    href: gameConfig.dataSources.trello ?? "#",
    status: "No official board verified",
    note: "Many players search for Trello even when a Roblox game has no board. Keep the page useful by stating the current status clearly."
  },
  {
    label: "This wiki",
    href: "/wiki",
    status: "Fan-made reference",
    note: "Use this site for source-labeled codes, mechanics, upgrade planning, and tier-list notes."
  }
];
