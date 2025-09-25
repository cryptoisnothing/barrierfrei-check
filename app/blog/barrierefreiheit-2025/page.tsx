"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function BlogArtikel2025() {
  const exportPDF = async () => {
    const element = document.getElementById("article-content");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("barrierefreiheit-2025.pdf");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-gray-700">
      {/* PDF Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={exportPDF}
          className="rounded bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700"
        >
          📄 Als PDF herunterladen
        </button>
      </div>

      {/* Artikel-Inhalt */}
      <article id="article-content">
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Wen betrifft die Pflicht?
        </h2>
        <p>
          Alle Unternehmen, die digitale Dienstleistungen oder Produkte
          anbieten, müssen ihre Webseiten, Apps und Online-Shops barrierefrei
          gestalten. Dazu gehören zum Beispiel Banken, Online-Händler,
          Versicherungen, Energieversorger, aber auch kleinere Betriebe, die
          Buchungen oder Bestellungen online ermöglichen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Was bedeutet „barrierefrei“ im Web?
        </h2>
        <p>
          Barrierefreie Webseiten sind so gestaltet, dass sie auch von Menschen
          mit Einschränkungen genutzt werden können. Dazu zählen z. B. Nutzer
          mit Sehbehinderung, Hörbehinderung oder motorischen Einschränkungen.
          Technische Standards wie die WCAG (Web Content Accessibility
          Guidelines) definieren klare Kriterien: ausreichende Kontraste,
          Alternativtexte für Bilder, verständliche Navigation, korrekte
          Struktur von Überschriften und vieles mehr.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Welche Folgen drohen bei Nicht-Umsetzung?
        </h2>
        <p>
          Wer die gesetzlichen Vorgaben nicht einhält, riskiert Abmahnungen,
          Bußgelder und Imageschäden. Gerade öffentliche Stellen und größere
          Unternehmen stehen unter besonderer Beobachtung. Aber auch kleinere
          Betriebe können haftbar gemacht werden, wenn ihre digitalen Angebote
          nicht zugänglich sind.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Was sollten Unternehmen jetzt tun?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Bestehende Webseiten und Apps prüfen (Accessibility-Check).</li>
          <li>Fehler und Probleme priorisiert beheben lassen.</li>
          <li>
            Langfristig barrierefreie Standards in alle digitalen Projekte
            integrieren.
          </li>
        </ul>

        <p className="mt-6">
          Wer frühzeitig handelt, verschafft sich nicht nur rechtliche
          Sicherheit, sondern auch einen Wettbewerbsvorteil. Barrierefreiheit
          bedeutet bessere Usability für alle und wird von Suchmaschinen wie
          Google positiv bewertet.
        </p>

        <p className="mt-8 font-medium text-blue-600">
          👉 Jetzt kostenlosen Schnellcheck starten und prüfen, ob Ihre Website
          2025-ready ist.
        </p>
      </article>
    </main>
  );
}
