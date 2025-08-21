/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // fix: use the full hostname from your URL
      },
    ],
  },
};

export default nextConfig;
