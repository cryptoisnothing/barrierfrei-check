export default function ScoreGauge({ score }: { score: number }) {
  const pct = Math.max(0, Math.min(100, score));
  const color = pct >= 90 ? 'text-green-600' : pct >= 70 ? 'text-yellow-600' : 'text-red-600';
  return (
    <div className="flex items-baseline gap-2">
      <span className={`text-5xl font-extrabold ${color}`}>{pct}</span>
      <span className="text-xl">/ 100</span>
    </div>
  );
}
