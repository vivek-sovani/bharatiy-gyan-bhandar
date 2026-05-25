/** @type {import('next').NextConfig} */

// On GitHub Pages a project site is served from /<repo>, so the CI workflow
// sets PAGES_BASE_PATH=/bharatiy-gyan-bhandar. Locally it is empty (served at /).
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
