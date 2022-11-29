/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://maps.googleapis.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
