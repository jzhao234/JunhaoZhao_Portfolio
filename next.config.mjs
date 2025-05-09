/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // if you're using next/image
    },
    basePath: '/JunhaoZhao_Portfolio',
    assetPrefix: '/JunhaoZhao_Portfolio',
};

export default nextConfig;
