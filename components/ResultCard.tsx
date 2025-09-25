type ResultProps = {
  score: number;
  summary?: string[];
  issues?: string[];
};

export default function ResultCard({ score, summary = [], issues = [] }: ResultProps) {
  const bandColor =
    score < 50 ? "bg-red-500" : score < 75 ? "bg-orange-500" : "bg-green-500";

  return (
    <section
      aria-labelledby="ergebnis-heading"
      className="border rounded-xl shadow-md bg-white dark:bg-gray-800 overflow-hidden"
    >
      {/* Farbbalken zur schnellen Orientierung */}
      <div className={`h-2 ${bandColor}`} aria-hidden="true" />

      <div className="p-6 space-y-6">
        {/* Score */}
        <header className="text-center">
          <h2 id="ergebnis-heading" className="text-xl font-semibold">
            Ergebnis
          </h2>
          <p className="text-4xl font-bold text-blue-600 mt-1" aria-live="polite">
            {score}/100
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {score < 50 ? "Bewertung: Schlecht" : score < 75 ? "Bewertung: Mittel" : "Bewertung: Gut"}
          </p>
        </header>

        {/* Zusammenfassung */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Zusammenfassung</h3>
          {summary.length > 0 ? (
            <ul role="list" className="space-y-2">
              {summary.map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-green-700 dark:text-green-400">
                  <span aria-hidden="true">✅</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Keine Zusammenfassung vorhanden.</p>
          )}
        </div>

        {/* Probleme */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Gefundene Probleme</h3>
          {issues.length > 0 ? (
            <ul role="list" className="space-y-2">
              {issues.map((issue, i) => (
                <li key={i} className="flex items-start gap-2 text-red-600">
                  <span aria-hidden="true">❌</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <span aria-hidden="true">✅</span>
              <span>Keine Probleme gefunden</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
