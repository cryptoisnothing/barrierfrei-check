import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barrierefreiheit 2025 – Pflicht und Chancen (BFSG/EAA)",
  description:
    "Ab 2025 gilt das Barrierefreiheitsstärkungsgesetz. Was Unternehmen jetzt beachten müssen – kompakt erklärt.",
  openGraph: {
    title: "Barrierefreiheit 2025 – Pflicht und Chancen",
    description:
      "Ab 2025 gilt das Barrierefreiheitsstärkungsgesetz. Was Unternehmen jetzt beachten müssen – kompakt erklärt.",
    images: ["/logo-transparent.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrierefreiheit 2025 – Pflicht und Chancen",
    description:
      "Ab 2025 gilt das Barrierefreiheitsstärkungsgesetz. Was Unternehmen jetzt beachten müssen – kompakt erklärt.",
    images: ["/logo-transparent.png"],
  },
};

export default function BlogArtikel2025() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">
        Barrierefreiheit wird Pflicht: Was Unternehmen bis 2025 beachten müssen
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Veröffentlicht am 25. September 2025 · Lesezeit: ca. 4 Minuten
      </p>

      <p>
        Ab Juni 2025 tritt das Barrierefreiheitsstärkungsgesetz (BFSG) in
        Deutschland vollständig in Kraft. Zusammen mit der europäischen
        Barrierefreiheitsrichtlinie (EAA) verpflichtet es viele Unternehmen,
        ihre digitalen Angebote für alle Menschen zugänglich zu machen. Das
        betrifft nicht nur große Konzerne, sondern auch kleine und mittlere
        Betriebe mit Online-Shops, Dienstleistungsportalen oder
        Buchungssystemen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Wen betrifft die Pflicht?</h2>
      <p>
        Alle Unternehmen, die digitale Dienstleistungen oder Produkte anbieten,
        müssen ihre Webseiten, Apps und Online-Shops barrierefrei gestalten.
        Dazu gehören zum Beispiel Banken, Online-Händler, Versicherungen,
        Energieversorger, aber auch kleinere Betriebe, die Buchungen oder
        Bestellungen online ermöglichen.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Was bedeutet „barrierefrei“ im Web?</h2>
      <p>
        Barrierefreie Webseiten sind so gestaltet, dass sie auch von Menschen
        mit Einschränkungen genutzt werden können. Dazu zählen z. B. Nutzer mit
        Sehbehinderung, Hörbehinderung oder motorischen Einschränkungen.
        Technische Standards wie die WCAG (Web Content Accessibility Guidelines)
        definieren klare Kriterien: ausreichende Kontraste, Alternativtexte für
        Bilder, verständliche Navigation, korrekte Struktur von Überschriften
        und vieles mehr.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Welche Folgen drohen bei Nicht-Umsetzung?</h2>
      <p>
        Wer die gesetzlichen Vorgaben nicht einhält, riskiert Abmahnungen,
        Bußgelder und Imageschäden. Gerade öffentliche Stellen und größere
        Unternehmen stehen unter besonderer Beobachtung. Aber auch kleinere
        Betriebe können haftbar gemacht werden, wenn ihre digitalen Angebote
        nicht zugänglich sind.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Was sollten Unternehmen jetzt tun?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Bestehende Webseiten und Apps prüfen (Accessibility-Check).</li>
        <li>Fehler und Probleme priorisiert beheben lassen.</li>
        <li>Langfristig barrierefreie Standards in alle digitalen Projekte integrieren.</li>
      </ul>

      <p className="mt-6">
        Wer frühzeitig handelt, verschafft sich nicht nur rechtliche Sicherheit,
        sondern auch einen Wettbewerbsvorteil. Barrierefreiheit bedeutet bessere
        Usability für alle und wird von Suchmaschinen wie Google positiv
        bewertet.
      </p>

      <div className="mt-10 space-y-6">
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          🚀 Jetzt kostenlosen Schnellcheck starten
        </a>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 dark:bg-gray-800/60 dark:text-gray-200 space-y-2">
          <p>✅ 100 % kostenlos & anonym</p>
          <p>✅ Sofort-Ergebnis in Sekunden</p>
          <p>✅ Optimiert für BFSG/EAA 2025</p>
        </div>
      </div>
    </main>
  );
}
