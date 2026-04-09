import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For @cloudflare/next-on-pages compatibility
};

if (process.env.NODE_ENV === "development") {
  const { setupDevPlatform } = await import(
    "@cloudflare/next-on-pages/next-dev"
  );
  await setupDevPlatform();
}

export default nextConfig;
