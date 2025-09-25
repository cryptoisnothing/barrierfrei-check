"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Barrierfrei-Check Logo" className="h-8 w-auto" />
          <h1 className="text-2xl font-extrabold tracking-tight">Barrierfrei-Check</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/impressum" className="hover:underline">Impressum</Link>
          <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
          <Link href="/kontakt" className="hover:underline">Kontakt</Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 border-t bg-white dark:bg-gray-800 text-sm font-medium">
          <Link href="/impressum" onClick={() => setMenuOpen(false)}>Impressum</Link>
          <Link href="/datenschutz" onClick={() => setMenuOpen(false)}>Datenschutz</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          <ThemeToggle />
        </nav>
      )}
    </header>
  );
}

function ThemeToggle() {
  return (
    <button
      onClick={() => {
        const root = document.documentElement;
        if (root.classList.contains("dark")) {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      }}
      className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      🌙 / ☀️
    </button>
  );
}
