// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  experimental: {
    appDir: true,
  },
  
  basePath: process.env.NODE_ENV === 'production' ? '/en' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/en' : '',
  
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
    },
  },
}

module.exports = nextConfig
