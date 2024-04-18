/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	env: {
		NEXT_PUBLIC_API_URL: process.env.API_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'jmjglobalwinpex.com',
				port: '',
				pathname: '/wp-content/**',
			},
			{
				protocol: 'https',
				hostname: 'lasallefood.id',
				port: '',
				pathname: '/wp-content/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn0.woolworths.media',
				port: '',
				pathname: '/content/**',
			},
		],
	},
};

export default nextConfig;
