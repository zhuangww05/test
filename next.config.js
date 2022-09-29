/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bazar-react.vercel.app"],
  }
}

module.exports = nextConfig
