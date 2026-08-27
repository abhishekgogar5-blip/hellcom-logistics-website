import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/visuals/faviconnn.png",
      },
    ];
  },
};

export default nextConfig;
