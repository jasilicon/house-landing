import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statically export the app to the `out/` directory (no Node.js server needed)
  output: "export",
  // The default Image Optimization loader requires a server; disable it for static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
