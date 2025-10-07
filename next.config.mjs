/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n: {
        locales: ['fr', 'en', 'de', 'nl'],
        defaultLocale: 'fr',
    },
    reactStrictMode: true,
}

export default nextConfig