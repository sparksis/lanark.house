import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description:
    "All posts from the lanark.house home-buying journey, grouped by builder.",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  // Group by builder
  const grouped: Record<string, typeof posts> = {};
  for (const post of posts) {
    const key = post.builder || "general";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(post);
  }

  const builderLabels: Record<string, string> = {
    "douglas-homes": "Douglas Homes",
    "jayman-built": "Jayman Built",
    "sterling-homes": "Sterling Homes",
    general: "General",
  };

  const order = ["general", "douglas-homes", "jayman-built", "sterling-homes"];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">All Posts</h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        {posts.length} posts documenting the home-buying journey.
      </p>

      {order
        .filter((key) => grouped[key])
        .map((key) => (
          <section key={key} className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4 text-[var(--color-accent)]">
              {builderLabels[key] || key}
            </h2>
            <div className="space-y-3">
              {grouped[key].map((post) => (
                <Link
                  key={`${post.year}-${post.month}-${post.day}-${post.slug}`}
                  href={`/posts/${post.year}/${post.month}/${post.day}/${post.slug}`}
                  className="block bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-accent)] transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium">{post.title}</h3>
                    <time className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  {post.description && (
                    <p className="text-sm text-[var(--color-text-muted)] mt-1 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
