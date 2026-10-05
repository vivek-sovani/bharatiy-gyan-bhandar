/** @type {import('next').NextConfig} */

// On GitHub Pages a project site is served from /<repo>, so the CI workflow
// sets PAGES_BASE_PATH=/bharatiy-gyan-bhandar. Locally it is empty (served at /).
const basePath = process.env.PAGES_BASE_PATH || '';

// Stamps this build so an open copy of the app can tell when a newer one has been deployed
// (see UpdateNotifier). CI passes the commit; locally it is the time the build started.
const buildId = (process.env.GITHUB_SHA || String(Date.now())).slice(0, 12);

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_BUILD_ID: buildId,
  },
};

export default nextConfig;
