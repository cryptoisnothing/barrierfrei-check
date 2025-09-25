import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ScoreGaugeProps = {
  score: number;
};

export default function ScoreGauge({ score }: ScoreGaugeProps) {
  const pathColor = score < 50 ? "#ef4444" : score < 75 ? "#f97316" : "#22c55e";
  const label = score < 50 ? "Schlecht" : score < 75 ? "Mittel" : "Gut";

  return (
    <div className="w-32 h-32 mx-auto" role="img" aria-label={`Bewertung ${score} von 100, ${label}`}>
      <CircularProgressbar
        value={score}
        text={`${score}/100`}
        styles={buildStyles({
          textColor: "#1f2937",
          pathColor,
          trailColor: "#e5e7eb",
          textSize: "16px",
        })}
      />
      <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
}
