import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { AdsterraSmartLink } from "@/components/ads";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";
import { runtimeConfig } from "@/lib/runtime-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const popunderScriptUrl = runtimeConfig.adsterraPopunderScriptUrl;
const socialBarScriptUrl = runtimeConfig.adsterraSocialBarScriptUrl;
const adsenseClientId = runtimeConfig.adsenseClientId;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.gameName} Wiki, Codes, Tier List and Tools`,
    template: `%s | ${siteConfig.gameName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.png"]
  },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.gameName} Codes, Wiki, Tier List, Trello, Discord & Calculator`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes, Wiki, Tier List, Trello, Discord & Calculator`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: "TN7_54o-AdLKKOgPTh0kIqlsMLisKQh5reXw2VQFa3w"
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#101114"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {adsenseClientId ? (
          <script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        ) : null}
        {popunderScriptUrl ? (
          <Script id="adsterra-popunder" src={popunderScriptUrl} strategy="afterInteractive" />
        ) : null}
        {socialBarScriptUrl ? (
          <Script id="adsterra-social-bar" src={socialBarScriptUrl} strategy="afterInteractive" />
        ) : null}
        <AdsterraSmartLink />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
