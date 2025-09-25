import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;       // ISO oder lesbares Datum
  readTime: string;   // z. B. "4 Min."
};

export default function BlogOverview() {
  const articles: Article[] = [
    {
      slug: "barrierefreiheit-2025",
      title: "Barrierefreiheit wird Pflicht ab 2025",
      excerpt:
        "Was Unternehmen jetzt beachten müssen, um rechtzeitig BFSG/EAA-konform zu sein.",
      date: "25.09.2025",
      readTime: "4 Min.",
    },
    // weitere Artikel hier ergänzen
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <article
            key={a.slug}
            className="border rounded-xl shadow-sm bg-white dark:bg-gray-800 p-6 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {a.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {a.date} · {a.readTime} Lesezeit
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{a.excerpt}</p>
            </div>
            <Link
              href={`/blog/${a.slug}`}
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Weiterlesen →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
