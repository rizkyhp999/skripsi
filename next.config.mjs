/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // or whatever your existing settings are

  // **Add this images configuration**
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9199",
      },
    ],
  },
};

export default nextConfig;
