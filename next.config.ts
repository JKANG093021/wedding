import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Static hosting has no image optimization server. Supply optimized WebP/AVIF photos.
  images: { unoptimized: true },
};
export default nextConfig;
