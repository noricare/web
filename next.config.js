/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_DB_FAQ_NORICARE_ID: process.env.NOTION_DB_FAQ_NORICARE_ID,
    NOTION_SECRET:process.env.NOTION_SECRET
},
};

module.exports = nextConfig;
