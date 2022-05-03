/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.sanity.io", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
