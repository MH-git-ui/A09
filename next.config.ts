import type { NextConfig } from "next";
const backend = process.env.API_SERVER_URL || "http://127.0.0.1:5000";
const backendUrl = new URL(backend);
if (!["http:", "https:"].includes(backendUrl.protocol) || backendUrl.origin !== backend)
  throw new Error("API_SERVER_URL must be an HTTP(S) origin without a trailing slash.");
if (process.env.VERCEL && (!process.env.API_SERVER_URL || backendUrl.protocol !== "https:"))
  throw new Error("Set API_SERVER_URL to the HTTPS backend origin before deploying to Vercel.");
const config: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backend}/api/:path*`,
      },
    ];
  },
};
export default config;
