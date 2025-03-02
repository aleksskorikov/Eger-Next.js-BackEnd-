// next.config.js

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*', // Путь, который перехватываем
//         destination: 'http://localhost:5001/api/:path*', // Путь, куда переадресовываем
//       },
//     ];
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5001',
        pathname: '/static/**',
      },
    ],
  },
};
module.exports = nextConfig;



