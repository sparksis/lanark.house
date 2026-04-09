import { compileMDX } from "next-mdx-remote/rsc";
import { Callout } from "@/components/mdx/Callout";
import { BuilderRating } from "@/components/mdx/BuilderRating";
import { TimelineItem } from "@/components/mdx/TimelineItem";

const components = {
  Callout,
  BuilderRating,
  TimelineItem,
};

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
    },
  });

  return content;
}
