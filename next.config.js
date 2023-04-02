// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  experimental: {
    appDir: true,
  },
    
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV !== 'production',
      ssr: process.env.NODE_ENV !== 'production',
      fileName: process.env.NODE_ENV !== 'production',
    },
  },
}

module.exports = nextConfig
