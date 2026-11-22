import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.43.161", "172.20.6.188", "localhost"],
  images: {
    // AVIF first, WebP as fallback: much smaller than JPEG for the same quality
    formats: ["image/avif", "image/webp"],
  },
  // Old template URLs from the previous capetowntrips.com site
  async redirects() {
    return [
      { source: "/about-2", destination: "/about", permanent: true },
      { source: "/contact-2", destination: "/contact", permanent: true },
      { source: "/services", destination: "/tours", permanent: true },
    ];
  },
};

export default nextConfig;
