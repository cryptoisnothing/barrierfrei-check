import jsPDF from "jspdf";

export function generatePDF(result: any) {
  const doc = new jsPDF();
  let y = 20;

  doc.setFont("helvetica", "bold");
  doc.text("Barrierfrei-Check Ergebnis", 14, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.text(`Score: ${result.score}/100`, 14, y);
  y += 10;

  // Zusammenfassung
  doc.setFont("helvetica", "bold");
  doc.text("Zusammenfassung", 14, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  if (!result.summary || result.summary.length === 0) {
    doc.text("Keine Zusammenfassung vorhanden.", 14, y);
    y += 6;
  } else {
    result.summary.forEach((line: string) => {
      doc.text(line, 14, y);
      y += 6;
    });
  }

  y += 4;

  // Probleme
  doc.setFont("helvetica", "bold");
  doc.text("Gefundene Probleme", 14, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  if (!result.issues || result.issues.length === 0) {
    doc.text("Keine Probleme gefunden.", 14, y);
    y += 6;
  } else {
    result.issues.forEach((issue: string, index: number) => {
      // Neue Seite falls nötig
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(`${index + 1}. ${issue}`, 14, y);
      y += 6;
    });
  }

  // Seitenzahlen einfügen
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Seite ${i} / ${pageCount}`, 200 - 30, 290); // rechts unten
  }

  return doc.output("blob");
}
