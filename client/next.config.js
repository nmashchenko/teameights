/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  images: {
    domains: [
      'teameights-production.s3.amazonaws.com',
      'localhost',
      'picsum.photos',
      'source.unsplash.com',
      'upload.wikimedia.org',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
