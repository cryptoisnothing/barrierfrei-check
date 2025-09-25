import Link from "next/link";

const posts = [
  {
    slug: "barrierefreiheit-2025",
    title: "Barrierefreiheit 2025 – Pflicht und Chancen",
    excerpt:
      "Ab 2025 gilt das Barrierefreiheitsstärkungsgesetz. Was Unternehmen jetzt wissen müssen und wie du vorbereitet bist.",
    date: "25. September 2025",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Blog</h1>
      <ul className="space-y-6 sm:space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="block text-lg sm:text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-xs sm:text-sm">{post.date}</p>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
