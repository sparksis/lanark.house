/**
 * Builder content loaded via static `?raw` webpack imports.
 * No fs/glob calls at runtime — safe for Cloudflare Workers.
 */
import matter from "gray-matter";

import sterlingRaw from "../../content/builders/sterling-homes.mdx?raw";
import jaymanRaw from "../../content/builders/jayman-built.mdx?raw";
import douglasRaw from "../../content/builders/douglas-homes.mdx?raw";

export type BuilderMeta = {
  slug: string;
  title: string;
  builder: string;
  rating: number;
  address: {
    street: string;
    city: string;
    province: string;
    postal: string;
  };
  pros: string[];
  cons: string[];
  status: "failed" | "terminated" | "success";
  possession_date: string | null;
};

const RAW_BUILDERS = [
  { raw: sterlingRaw, slug: "sterling-homes" },
  { raw: jaymanRaw, slug: "jayman-built" },
  { raw: douglasRaw, slug: "douglas-homes" },
];

function parseBuilder(raw: string, slug: string): { meta: BuilderMeta; content: string } {
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title || slug,
      builder: data.builder || slug,
      rating: data.rating || 0,
      address: data.address || { street: "", city: "", province: "", postal: "" },
      pros: data.pros || [],
      cons: data.cons || [],
      status: data.status || "failed",
      possession_date: data.possession_date || null,
    },
    content,
  };
}

export async function getAllBuilders(): Promise<{ meta: BuilderMeta; content: string }[]> {
  return RAW_BUILDERS.map(({ raw, slug }) => parseBuilder(raw, slug));
}

export async function getBuilderBySlug(
  slug: string
): Promise<{ meta: BuilderMeta; content: string } | null> {
  const entry = RAW_BUILDERS.find((b) => b.slug === slug);
  if (!entry) return null;
  return parseBuilder(entry.raw, entry.slug);
}
