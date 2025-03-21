import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/wp-json/:path*',
        destination: 'http://baltimore.local/wp-json/:path*',
      },
    ];
  },
};

export default nextConfig;
