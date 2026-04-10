/**
 * Post content loaded via static `?raw` webpack imports.
 * No fs/glob calls at runtime — safe for Cloudflare Workers.
 */
import matter from "gray-matter";

// Douglas Homes
import post_douglas_20241110 from "../../content/posts/douglas-homes/2024-11-10-a-tale-of-red-flags-and-transparency.mdx?raw";
import post_douglas_20241118 from "../../content/posts/douglas-homes/2024-11-18-the-8-inch-divide.mdx?raw";
import post_douglas_20241120 from "../../content/posts/douglas-homes/2024-11-20-a-cautionary-tale.mdx?raw";
// House
import post_house_20241101 from "../../content/posts/house/2024-11-01-introduction.mdx?raw";
import post_house_20250726 from "../../content/posts/house/2025-07-26-conclusion.mdx?raw";
// Jayman Built
import post_jayman_20250304 from "../../content/posts/jayman-built/2025-03-04-a-tale-of-two-contracts.mdx?raw";
import post_jayman_20250428 from "../../content/posts/jayman-built/2025-04-28-the-shower-and-the-silence.mdx?raw";
// Sterling Homes
import post_sterling_20250503 from "../../content/posts/sterling-homes/2025-05-03-a-new-beginning.mdx?raw";
import post_sterling_20250602 from "../../content/posts/sterling-homes/2025-06-02-the-unveiled-reality-of-homeownership.mdx?raw";
import post_sterling_20250615 from "../../content/posts/sterling-homes/2025-06-15-something-about-mike.mdx?raw";
import post_sterling_20250620 from "../../content/posts/sterling-homes/2025-06-20-unfiltered-feedback.mdx?raw";
import post_sterling_20250712 from "../../content/posts/sterling-homes/2025-07-12-warranty-and-repair-review.mdx?raw";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  builder?: string;
  draft: boolean;
  year: string;
  month: string;
  day: string;
  filePath: string;
};

type RawPost = {
  raw: string;
  subdir: string;
  filename: string; // e.g. "2024-11-10-a-tale-of-red-flags-and-transparency"
};

const RAW_POSTS: RawPost[] = [
  { raw: post_douglas_20241110, subdir: "douglas-homes", filename: "2024-11-10-a-tale-of-red-flags-and-transparency" },
  { raw: post_douglas_20241118, subdir: "douglas-homes", filename: "2024-11-18-the-8-inch-divide" },
  { raw: post_douglas_20241120, subdir: "douglas-homes", filename: "2024-11-20-a-cautionary-tale" },
  { raw: post_house_20241101,   subdir: "house",         filename: "2024-11-01-introduction" },
  { raw: post_house_20250726,   subdir: "house",         filename: "2025-07-26-conclusion" },
  { raw: post_jayman_20250304,  subdir: "jayman-built",  filename: "2025-03-04-a-tale-of-two-contracts" },
  { raw: post_jayman_20250428,  subdir: "jayman-built",  filename: "2025-04-28-the-shower-and-the-silence" },
  { raw: post_sterling_20250503, subdir: "sterling-homes", filename: "2025-05-03-a-new-beginning" },
  { raw: post_sterling_20250602, subdir: "sterling-homes", filename: "2025-06-02-the-unveiled-reality-of-homeownership" },
  { raw: post_sterling_20250615, subdir: "sterling-homes", filename: "2025-06-15-something-about-mike" },
  { raw: post_sterling_20250620, subdir: "sterling-homes", filename: "2025-06-20-unfiltered-feedback" },
  { raw: post_sterling_20250712, subdir: "sterling-homes", filename: "2025-07-12-warranty-and-repair-review" },
];

function parseFilename(filename: string): { year: string; month: string; day: string; slug: string } {
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!match) throw new Error(`Invalid filename format: ${filename}`);
  return { year: match[1], month: match[2], day: match[3], slug: match[4] };
}

function parsePost(entry: RawPost): PostMeta {
  const { data } = matter(entry.raw);
  const { year, month, day, slug } = parseFilename(entry.filename);
  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : "",
    description: data.description || "",
    tags: data.tags || [],
    builder: data.builder,
    draft: data.draft ?? false,
    year,
    month,
    day,
    filePath: `${entry.subdir}/${entry.filename}.mdx`,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  return RAW_POSTS.map(parsePost)
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(
  year: string,
  month: string,
  day: string,
  slug: string
): Promise<{ meta: PostMeta; content: string } | null> {
  const entry = RAW_POSTS.find((p) => {
    const parsed = parseFilename(p.filename);
    return parsed.year === year && parsed.month === month && parsed.day === day && parsed.slug === slug;
  });
  if (!entry) return null;
  const { content } = matter(entry.raw);
  return { meta: parsePost(entry), content };
}
