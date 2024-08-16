import "./globals.css";
import { cn } from "@/lib/utils";
import { fontMono, fontSans, fontSerif } from "@/lib/fonts";
import { SelineAnalytics } from "@/components/seline-analytics";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Anthropic", "Claude", "AI", "Desktop"],
  authors: [
    {
      name: "Patrick",
      url: "https://x.com/_patrickpc",
    },
  ],
  creator: "@_patrickpc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/opengraph-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@_patrickpc",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          fontSerif.variable,
          "font-sans"
        )}
      >
        {children}
        <SelineAnalytics />
      </body>
    </html>
  );
}
