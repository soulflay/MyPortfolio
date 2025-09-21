
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // <-- ignore type errors
  },
};

module.exports = nextConfig;
