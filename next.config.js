/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*", // Перехоплює всі запити
        destination: "https://nm-massagekiev.com.ua", // Змінити на ваш новий домен
        permanent: true, // Використовуйте 301 редірект для постійного редіректу
      },
    ];
  },

  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
