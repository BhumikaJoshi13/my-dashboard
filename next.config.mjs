/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
};

// Apply bundle analyzer configuration
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  ...nextConfig,
});
