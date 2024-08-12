/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.azcareservicesllc.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'www.ophealthservices.com' },
      { protocol: 'https', hostname: 'voiceaustralia.community' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'qtxasset.com' },
      { protocol: 'https', hostname: 'www.access-healthcare.com' },
    ],
  },
};

export default nextConfig;
