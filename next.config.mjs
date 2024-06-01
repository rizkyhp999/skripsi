/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // or whatever your existing settings are

  // **Add this images configuration**
  images: {
    domains: ["localhost"], // Allow images from localhost
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9199", // The port of your local Firebase Storage emulator
      },
    ],
  },
};

export default nextConfig;
