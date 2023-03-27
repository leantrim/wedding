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
      displayName: true,
      ssr: true,
      fileName: true,
    },
  },
}

module.exports = nextConfig
