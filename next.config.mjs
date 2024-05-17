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


};

export default nextConfig;
