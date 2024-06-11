/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: "",
          },
        ],
      },
      experimental: {
        taint: true,
      },
      images: {
        domains:["cdn.sanity.io"  ]
      }


};

export default nextConfig;
