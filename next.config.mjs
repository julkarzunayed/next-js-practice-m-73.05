/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'  // to validate all image any image source.
            }
        ],
    },
};

export default nextConfig;
