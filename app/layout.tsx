import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SiteHeader from "../components/SiteHeader";

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
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SiteHeader />
          <div className="flex-grow">{children}</div>
          <footer className="text-center text-sm py-10 border-t bg-white/70 dark:bg-gray-800/70 mt-16">
            © {new Date().getFullYear()} Barrierfrei-Check – Einfach. Modern. Intuitiv.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
