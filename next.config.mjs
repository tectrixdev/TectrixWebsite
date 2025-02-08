
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  output: 'export',
  basePath: '/TectrixWeb',
  assetPrefix: '/TectrixWeb',
  images: {
    unoptimized: true,
  },
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};

export default nextConfig;

