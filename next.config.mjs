import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: false,
      },
    ];
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withMDX(nextConfig);
