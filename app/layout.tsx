import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Barrierfrei-Check",
  description:
    "Schnellcheck für Barrierefreiheit (EAA/BFSG) – in Sekunden zum Ergebnis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
        {/* Header */}
        <Header />

        {/* Hauptinhalt */}
        <main id="main" className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 dark:text-gray-300 py-10 border-t bg-white/70 dark:bg-gray-800/70 mt-16">
          © {new Date().getFullYear()} Barrierfrei-Check – Einfach. Modern.
          Intuitiv.
        </footer>
      </body>
    </html>
  );
}
