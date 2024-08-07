/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname:
          "/Crypto-deployer/jerboa/blob/852bb9b7191c222b0ee0398b403eeaaec2a771ec/photo_2024-08-07%2014.54.12.jpeg",
      },
    ],
  },
};

export default nextConfig;
