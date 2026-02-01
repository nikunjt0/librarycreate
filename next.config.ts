import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/slide-deck", destination: "/libraryCreate%20Pitch%20Deck.pdf" },
    ];
  },
};

export default nextConfig;
