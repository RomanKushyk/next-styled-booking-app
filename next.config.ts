import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "192.168.31.226"],
  reactCompiler: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      minify: true,
    },
  },
  output: "export",
  basePath: isProd ? "/next-styled-booking-app" : "",
  assetPrefix: isProd ? "/next-styled-booking-app" : "",
  trailingSlash: true,
};

export default nextConfig;
