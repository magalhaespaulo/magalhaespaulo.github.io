/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  output: 'export',
  experimental: {
    scrollRestoration: false,
  },
}

module.exports = nextConfig
