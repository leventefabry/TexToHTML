import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tex-to-html",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
