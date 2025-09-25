import jsPDF from 'jspdf';
import type { ScanResult } from '../lib/analyzer';

export function exportPdf(result: ScanResult) {
  const doc = new jsPDF();
  let y = 16;

  doc.setFontSize(18);
  doc.text('Barrierfrei-Check – Report', 14, y); y += 8;
  doc.setFontSize(11);
  doc.text(`Website: ${result.url}`, 14, y); y += 6;
  doc.text(`Datum: ${new Date(result.timestamp).toLocaleString('de-DE')}`, 14, y); y += 6;
  doc.text(`Score: ${result.score}/100`, 14, y); y += 10;

  doc.setFont(undefined, 'bold');
  doc.text('Zusammenfassung', 14, y); y += 6;
  doc.setFont(undefined, 'normal');
  if (!result.summary || result.summary.length === 0) {
    doc.text('- Keine offensichtlichen Basis-Probleme erkannt.', 14, y); y += 6;
  } else {
    result.summary.forEach((s) => { 
      const lines = doc.splitTextToSize(`- ${s}`, 180);
      doc.text(lines, 14, y); 
      y += 6 + (lines.length-1)*6;
    });
  }

  y += 4;
  doc.setFont(undefined, 'bold');
  doc.text('Gefundene Probleme', 14, y); y += 6;
  doc.setFont(undefined, 'normal');
  if (!result.issues || result.issues.length === 0) {
    doc.text('- Keine Probleme anhand der Heuristik.', 14, y); y += 6;
  } else {
    result.issues.forEach((i) => {
      const block = `• [${(i.severity || '').toUpperCase()}] ${i.title}: ${i.detail}${i.wcag ? ` (WCAG ${i.wcag})` : ''}`;
      const split = doc.splitTextToSize(block, 180);
      doc.text(split, 14, y);
      y += 6 + (split.length - 1) * 6;
      if (y > 280) { doc.addPage(); y = 16; }
    });
  }

  doc.save('Barrierfrei-Check_Report.pdf');
}
