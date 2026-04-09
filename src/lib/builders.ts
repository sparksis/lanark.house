import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

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

const BUILDERS_DIR = path.join(process.cwd(), "content/builders");

export async function getAllBuilders(): Promise<
  { meta: BuilderMeta; content: string }[]
> {
  const files = await glob("*.mdx", { cwd: BUILDERS_DIR });

  return files.map((file) => {
    const fullPath = path.join(BUILDERS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const slug = path.basename(file, ".mdx");

    return {
      meta: {
        slug,
        title: data.title || slug,
        builder: data.builder || slug,
        rating: data.rating || 0,
        address: data.address || {
          street: "",
          city: "",
          province: "",
          postal: "",
        },
        pros: data.pros || [],
        cons: data.cons || [],
        status: data.status || "failed",
        possession_date: data.possession_date || null,
      },
      content,
    };
  });
}

export async function getBuilderBySlug(
  slug: string
): Promise<{ meta: BuilderMeta; content: string } | null> {
  const builders = await getAllBuilders();
  return builders.find((b) => b.meta.slug === slug) || null;
}
