/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		localhost: "http://localhost:3000",
		repo: "test-app-immigrant-invest",
		user: "tikhoniz",
		gitUserToken: process.env.GIT_USER_TOKEN,
	},
};

module.exports = nextConfig;
