import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

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

const CONTENT_DIR = path.join(process.cwd(), "content/posts");

function parseFilename(filename: string): {
  year: string;
  month: string;
  day: string;
  slug: string;
} {
  const basename = path.basename(filename, ".mdx");
  const match = basename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!match) throw new Error(`Invalid filename format: ${filename}`);
  return { year: match[1], month: match[2], day: match[3], slug: match[4] };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await glob("**/*.mdx", { cwd: CONTENT_DIR });

  const posts = files.map((file) => {
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);
    const { year, month, day, slug } = parseFilename(file);

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
      filePath: file,
    };
  });

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(
  year: string,
  month: string,
  day: string,
  slug: string
): Promise<{ meta: PostMeta; content: string } | null> {
  const posts = await getAllPosts();
  const meta = posts.find(
    (p) => p.year === year && p.month === month && p.day === day && p.slug === slug
  );
  if (!meta) return null;

  const fullPath = path.join(CONTENT_DIR, meta.filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { content } = matter(raw);

  return { meta, content };
}
