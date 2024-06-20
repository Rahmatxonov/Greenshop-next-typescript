/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: "http://3.70.236.23:7777/v1",
  },
  images: {
    domains: ["3.70.236.23", "dummyimage.com"],
  },
};

export default nextConfig;
