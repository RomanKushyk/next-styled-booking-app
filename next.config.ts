import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      minify: true,
    },
  },
};

export default nextConfig;
