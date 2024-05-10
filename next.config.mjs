/** @type {import('next').NextConfig} */
console.log(process.env.NODE_ENV);
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  assetPrefix: isDev ? "https://s6.imgcdn.dev" : undefined,
  basePath: "/docs",
};

export default nextConfig;
