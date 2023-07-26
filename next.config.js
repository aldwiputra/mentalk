/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'imgur.com', 'cdn.filestackcontent.com'],
  },
};

module.exports = nextConfig;
