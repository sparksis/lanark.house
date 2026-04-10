export const dynamic = "force-static";
export const revalidate = false;

import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { renderMDX } from "@/lib/mdx";
import Link from "next/link";
import type { Metadata } from "next";

type Params = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({
    year: p.year,
    month: p.month,
    day: p.day,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year, month, day, slug } = await params;
  const post = await getPostBySlug(year, month, day, slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

const builderLabels: Record<string, string> = {
  "douglas-homes": "Douglas Homes",
  "jayman-built": "Jayman Built",
  "sterling-homes": "Sterling Homes",
};

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year, month, day, slug } = await params;
  const post = await getPostBySlug(year, month, day, slug);
  if (!post) notFound();

  const { meta, content } = post;
  const mdxContent = await renderMDX(content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/posts"
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-6 inline-block"
      >
        &larr; All Posts
      </Link>

      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-3">{meta.title}</h1>
        <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
          <time>
            {new Date(meta.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {meta.builder && (
            <Link
              href={`/builders/${meta.builder}`}
              className="px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20"
            >
              {builderLabels[meta.builder] || meta.builder}
            </Link>
          )}
        </div>
        {meta.tags.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-invert max-w-none [&_p]:text-[var(--color-text)] [&_p]:leading-relaxed [&_h2]:font-display [&_h3]:font-display [&_li]:text-[var(--color-text)] [&_strong]:text-[var(--color-text)] [&_blockquote]:border-l-[var(--color-accent)] [&_blockquote]:text-[var(--color-text-muted)]">
        {mdxContent}
      </article>
    </div>
  );
}
