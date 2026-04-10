export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllBuilders } from "@/lib/builders";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lanark.house";

  const posts = await getAllPosts();
  const builders = await getAllBuilders();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/journey`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/builders`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/checklist`, lastModified: new Date(), priority: 0.7 },
    {
      url: `${baseUrl}/post-possession`,
      lastModified: new Date(),
      priority: 0.7,
    },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.5 },
  ];

  const builderPages: MetadataRoute.Sitemap = builders.map((b) => ({
    url: `${baseUrl}/builders/${b.meta.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/posts/${p.year}/${p.month}/${p.day}/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.8,
  }));

  return [...staticPages, ...builderPages, ...postPages];
}
