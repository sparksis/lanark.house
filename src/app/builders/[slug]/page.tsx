export const dynamic = "force-static";
export const revalidate = false;

import { notFound } from "next/navigation";
import { getAllBuilders, getBuilderBySlug, getBuilderHtml } from "@/lib/builders";
import { getAllPosts } from "@/lib/posts";
import { BuilderRating } from "@/components/mdx/BuilderRating";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const builders = await getAllBuilders();
  return builders.map((b) => ({ slug: b.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const builder = await getBuilderBySlug(slug);
  if (!builder) return {};
  return {
    title: builder.meta.title,
    description: `${builder.meta.title} — rated ${builder.meta.rating}/5. ${builder.meta.pros.length} pros, ${builder.meta.cons.length} cons.`,
  };
}

const statusLabels: Record<string, { label: string; color: string }> = {
  failed: { label: "FAILED", color: "#e85050" },
  terminated: { label: "TERMINATED", color: "#e8b355" },
  success: { label: "SUCCESS", color: "#52c41a" },
};

export default async function BuilderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const builder = await getBuilderBySlug(slug);
  if (!builder) notFound();

  const { meta } = builder;
  const html = getBuilderHtml(slug);
  const status = statusLabels[meta.status];

  // Related posts
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.builder === meta.slug);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/builders"
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-6 inline-block"
      >
        &larr; All Builders
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <h1 className="font-display text-3xl font-bold">{meta.title}</h1>
        <span
          className="text-xs font-mono px-2 py-1 rounded"
          style={{
            color: status.color,
            backgroundColor: `${status.color}20`,
          }}
        >
          {status.label}
        </span>
      </div>

      <BuilderRating rating={meta.rating} />

      <div className="text-sm text-[var(--color-text-muted)] mt-2 mb-8">
        {meta.address.street}, {meta.address.city}, {meta.address.province}{" "}
        {meta.address.postal}
        {meta.possession_date && (
          <span className="ml-4">
            Possession:{" "}
            {new Date(meta.possession_date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        )}
      </div>

      {/* Pros/Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4">
          <h2 className="font-semibold text-[#52c41a] mb-3">Pros</h2>
          <ul className="space-y-2">
            {meta.pros.map((pro, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-[#52c41a]">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4">
          <h2 className="font-semibold text-[#e85050] mb-3">Cons</h2>
          <ul className="space-y-2">
            {meta.cons.map((con, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-[#e85050]">-</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MDX Body */}
      <article
        className="prose prose-invert max-w-none [&_p]:text-[var(--color-text)] [&_p]:leading-relaxed [&_h2]:font-display [&_h3]:font-display [&_li]:text-[var(--color-text)] [&_strong]:text-[var(--color-text)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <h2 className="font-display text-xl font-bold mb-4">
            Related Posts
          </h2>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.year}/${post.month}/${post.day}/${post.slug}`}
                className="block bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{post.title}</h3>
                  <time className="text-sm text-[var(--color-text-muted)]">
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.description && (
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    {post.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
