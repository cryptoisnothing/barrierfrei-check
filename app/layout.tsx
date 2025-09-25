import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Barrierfrei-Check",
  description: "Schnellcheck für Barrierefreiheit (EAA/BFSG) – in Sekunden zum Ergebnis.",
  keywords: [
    "Barrierefreiheit",
    "BFSG 2025",
    "EAA",
    "Accessibility",
    "Webseiten Check",
    "WCAG",
    "Konformität",
  ],
  metadataBase: new URL("https://barrierfrei-check.vercel.app"), // ← später auf deine Domain ändern
  alternates: { canonical: "/" },
  openGraph: {
    title: "Barrierfrei-Check – BFSG/EAA Schnellcheck",
    description: "Prüfe in Sekunden, ob deine Website 2025-ready ist (BFSG/EAA).",
    url: "https://barrierfrei-check.vercel.app",
    siteName: "Barrierfrei-Check",
    images: [
      {
        url: "/logo-transparent.png", // liegt in /public
        width: 1200,
        height: 630,
        alt: "Barrierfrei-Check",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrierfrei-Check – BFSG/EAA Schnellcheck",
    description: "Prüfe in Sekunden, ob deine Website 2025-ready ist (BFSG/EAA).",
    images: ["/logo-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
        {/* Skip-Link für Screenreader & Tastatur */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white dark:bg-gray-800 text-sm px-3 py-2 rounded shadow"
        >
          Zum Inhalt springen
        </a>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Header */}
          <header role="banner" className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop
