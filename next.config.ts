import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Mengubah Next.js menjadi statis
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung optimasi gambar otomatis Next.js
  },
  basePath: '',
};

export default nextConfig;
