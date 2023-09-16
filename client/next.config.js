/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  images: {
    domains: ['teameights-production.s3.amazonaws.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
