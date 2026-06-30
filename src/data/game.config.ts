import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Paper Plane for Brainrots",
  slug: "paper-plane-brainrots",
  domain: "https://paperplanebrainrots.com",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Money",
    abbr: "$"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Daily source checks while the game is fresh",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/110373292461174/Paper-Plane-for-Brainrots",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Google AdSense pending; Adsterra not configured",
    usesRuntimeConfig: true
  }
};
