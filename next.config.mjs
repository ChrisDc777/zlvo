/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    KINDE_SITE_URL: process.env.KINDE_SITE_URL,
  },
};

export default nextConfig;
