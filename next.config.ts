import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Mengubah Next.js menjadi statis
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung optimasi gambar otomatis Next.js
  },
  // Jika URL kamu adalah username.github.io/nama-repo/, 
  // ganti 'nama-repo' di bawah ini:
  basePath: '/timotismjntk.github.io',
};

export default nextConfig;
