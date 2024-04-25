/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    API_URL: 'http://110.74.194.123:8989/api/todo/v1/'
  }
};
export default nextConfig;
