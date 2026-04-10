import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Allow `import raw from '*.mdx?raw'` — bundled at build time, no fs at runtime
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
