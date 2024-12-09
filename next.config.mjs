/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "logo.clearbit.com",
      },
    ],
  },
}

export default nextConfig
