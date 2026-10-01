/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure Windows file watcher detects all code edits instantly
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 800, // Poll every 800ms for reliable Windows file change detection
        aggregateTimeout: 200,
        ignored: ['**/node_modules', '**/.next'],
      };
    }
    return config;
  },
  // Disable aggressive chunk caching in dev to avoid 404s on hot restart
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, max-age=0, must-revalidate',
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
