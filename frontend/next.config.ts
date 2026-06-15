import type { NextConfig } from "next";
import path from "node:path";

const assetBaseUrl = process.env.NEXT_PUBLIC_ASSET_BASE_URL;
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

if (assetBaseUrl) {
  const publicAssetUrl = new URL(assetBaseUrl);

  remotePatterns.push({
    protocol: publicAssetUrl.protocol.replace(":", "") as "http" | "https",
    hostname: publicAssetUrl.hostname,
    port: publicAssetUrl.port,
    pathname: "/**",
  });
}

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns,
  },
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
