"use client";

import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <header role="banner" className="sticky top-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Barrierfrei-Check Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">
              Barrierfrei-Check
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="flex items-center gap-6 text-sm font-medium">
            <Link href="/blog" className="text-blue-700 dark:text-blue-400 hover:underline">
              Blog
            </Link>
            <Link href="/impressum" className="text-blue-700 dark:text-blue-400 hover:underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-blue-700 dark:text-blue-400 hover:underline">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="text-blue-700 dark:text-blue-400 hover:underline">
              Kontakt
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
    </ThemeProvider>
  );
}
