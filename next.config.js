const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.google.com"],
  },
};
module.exports = withPlugins([[withImages]], nextConfig);
