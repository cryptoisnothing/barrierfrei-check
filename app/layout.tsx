import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Barrierfrei-Check",
  description: "Schnellcheck für Barrierefreiheit (EAA/BFSG)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b shadow-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.svg"
                  alt="Barrierfrei-Check Logo"
                  className="h-8 w-auto"
                />
                <h1 className="text-2xl font-extrabold tracking-tight">
                  Barrierfrei-Check
                </h1>
              </div>
              <div className="flex items-center gap-6">
                <nav className="space-x-6 text-sm font-medium">
                  <Link href="/impressum" className="hover:underline">
                    Impressum
                  </Link>
                  <Link href="/datenschutz" className="hover:underline">
                    Datenschutz
                  </Link>
                  <Link href="/kontakt" className="hover:underline">
                    Kontakt
                  </Link>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-grow">{children}</div>

          {/* Footer */}
          <footer className="text-center text-sm py-10 border-t bg-white/70 dark:bg-gray-800/70 mt-16">
            © {new Date().getFullYear()} Barrierfrei-Check – Einfach. Modern.
            Intuitiv.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Button-Komponente
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

