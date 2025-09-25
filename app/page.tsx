"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const handleScan = async () => {
    if (!url) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResult({
        url: data.url ?? url,
        timestamp: data.timestamp ?? Date.now(),
        score: data.score ?? 0,
        summary: data.summary ?? [],
        issues: data.issues ?? [],
      });
    } catch (err) {
      console.error(err);
      setResult({
        url,
        timestamp: Date.now(),
        score: 0,
        summary: [],
        issues: [],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/pdf",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Barrierfrei-Report.pdf`;
    link.click();
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Schnellcheck für Barrierefreiheit
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          EAA/BFSG-konform – URL eingeben → Score & Probleme → PDF-Report.
        </motion.p>
      </section>

      {/* Eingabe-Card */}
      <motion.div
        className="rounded-3xl border bg-white/80 shadow-xl p-10 backdrop-blur-md mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex gap-3">
          <input
            type="url"
            placeholder="https://www.deine-seite.de"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border rounded-2xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleScan}
            disabled={loading}
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
          >
            {loading ? "Prüfe…" : "Prüfen"}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Hinweis: Dies ist ein Schnellcheck – kein vollständiges WCAG-Gutachten.
        </p>
      </motion.div>

      {/* Ergebnis-Card */}
      {result && (
        <motion.div
          className="rounded-3xl border bg-white/90 shadow-xl p-10 backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Ergebnis für {result.url}
            </h2>
            <span className="text-sm text-gray-400">
              {new Date(result.timestamp).toLocaleString("de-DE")}
            </span>
          </div>

          {/* Score */}
          <div className="mb-8">
            <p className="font-medium text-gray-800">Score</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-1 overflow-hidden">
              <motion.div
                className={`h-3 rounded-full ${
                  result.score < 50
                    ? "bg-red-500"
                    : result.score < 80
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
            <p className="text-sm mt-1 text-gray-600 font-medium">
              {result.score}/100
            </p>
          </div>

          {/* Zusammenfassung */}
          <div className="mb-8">
            <p className="font-medium mb-2 text-gray-800">Zusammenfassung</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {result.summary.length === 0 ? (
                <li>Keine offensichtlichen Probleme gefunden.</li>
              ) : (
                result.summary.map((s: string, i: number) => <li key={i}>{s}</li>)
              )}
            </ul>
          </div>

          {/* Details */}
          <div className="mb-8">
            <p className="font-medium mb-2 text-gray-800">Details</p>
            <ul className="text-sm space-y-2 text-gray-600">
              {result.issues.length > 0 ? (
                result.issues.map((issue: any, i: number) => (
                  <li
                    key={i}
                    className="border rounded-2xl p-4 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span className="font-semibold text-gray-800">
                      [{issue.severity?.toUpperCase() ?? "INFO"}]
                    </span>{" "}
                    {issue.title ?? "Unbekannt"} – {issue.detail ?? ""}
                  </li>
                ))
              ) : (
                <li>Keine Detailprobleme gefunden.</li>
              )}
            </ul>
          </div>

          {/* AdSense / Banner-Platzhalter */}
          <div className="my-8 p-6 rounded-2xl border bg-gray-50 text-center">
            <p className="text-sm text-gray-500 mb-2">
              – Anzeige / Ad Placeholder –
            </p>
            <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              Dein AdSense-Code kommt hier rein
            </div>
          </div>

          {/* Affiliate-Slot */}
          <div className="my-8 p-6 rounded-2xl border bg-blue-50 text-center">
            <p className="font-medium text-gray-700 mb-2">
              Website verbessern?
            </p>
            <a
              href="#"
              target="_blank"
              className="inline-block px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Jetzt mit IONOS / Wix starten →
            </a>
          </div>

          <button
            onClick={handleExport}
            className="mt-6 px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
          >
            PDF-Report herunterladen
          </button>
        </motion.div>
      )}

      {/* Sponsoring-Block (Footer-Ebene) */}
      <section className="mt-16 text-center p-8 bg-gray-100 rounded-3xl border">
        <p className="text-gray-500 text-sm mb-2">Empfohlene Agentur:</p>
        <div className="text-lg font-semibold text-gray-800">
          [Agentur XY – Platzhalter]
        </div>
      </section>
    </main>
  );
}
