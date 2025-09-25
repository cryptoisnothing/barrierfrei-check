import ScoreGauge from './ScoreGauge';
import type { ScanResult } from '../lib/analyzer';

export default function ResultCard({ result, onExport }: { result: ScanResult; onExport: () => void }) {
  return (
    <div className="card mt-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="badge mb-2">Prüfung am {new Date(result.timestamp).toLocaleString('de-DE')}</div>
          <h2 className="text-2xl font-bold">Ergebnis für {result.url}</h2>
        </div>
        <ScoreGauge score={result.score} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="card">
          <h3 className="font-semibold mb-2">Kurz-Zusammenfassung</h3>
          <ul className="list-disc list-inside space-y-1">
            {result.summary.length === 0 && <li>Keine offensichtlichen Basis-Probleme erkannt.</li>}
            {result.summary.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Statistiken</h3>
          <ul className="space-y-1">
            <li>Bilder: {result.stats.images} (ohne Alt: {result.stats.imagesMissingAlt})</li>
            <li>Links: {result.stats.links} (generisch: {result.stats.genericLinks})</li>
            <li>H1-Überschriften: {result.stats.headingsH1}</li>
            <li>Formulare: {result.stats.inputs} (ohne Label: {result.stats.inputsWithoutLabel})</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Gefundene Probleme</h3>
        {result.issues.length === 0 ? (
          <p className="text-sm text-gray-600">Keine Probleme auf Basis der Heuristik gefunden.</p>
        ) : (
          <ul className="space-y-2">
            {result.issues.map((i) => (
              <li key={i.id} className="p-3 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{i.title}</div>
                  <span className="badge uppercase">{i.severity}</span>
                </div>
                <div className="text-sm text-gray-700 mt-1">{i.detail}{i.selector ? ` (${i.selector})` : ''}</div>
                {i.wcag && <div className="text-xs text-gray-500 mt-1">WCAG: {i.wcag}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex gap-2">
        <button onClick={onExport} className="btn">PDF-Report herunterladen</button>
      </div>
    </div>
  );
}
