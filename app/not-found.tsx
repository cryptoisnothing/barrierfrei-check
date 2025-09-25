export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center space-y-6">
      <h1 className="text-4xl font-bold">Seite nicht gefunden</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Uups – diese Seite gibt es nicht (mehr). Hier geht’s zurück zum Schnellcheck.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
      >
        🚀 Zum Schnellcheck
      </a>
    </main>
  );
}
