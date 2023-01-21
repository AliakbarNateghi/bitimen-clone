/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://cex.io/:path*",
      },
    ]
  },
}

module.exports = nextConfig
