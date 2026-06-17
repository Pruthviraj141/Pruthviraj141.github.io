import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages to avoid issues with some paths
  trailingSlash: true,
  allowedDevOrigins: ['192.168.1.10'],
};

export default nextConfig;
