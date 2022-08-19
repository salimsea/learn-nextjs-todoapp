/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    domains: [
      "storage.googleapis.com",
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
      "blogger.googleusercontent.com",
      "googleusercontent.com",
      "1.bp.blogspot.com",
      "2.bp.blogspot.com",
      "3.bp.blogspot.com",
      "4.bp.blogspot.com",
      "5.bp.blogspot.com",
      "6.bp.blogspot.com",
      "bp.blogspot.com",
      "blogspot.com",
      "*.bp.blogspot.com",
    ],
  },
};

module.exports = nextConfig;
