/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    domains: [],
    unoptimized: true, // For local images
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
