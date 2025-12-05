/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = {
    /*
    compiler: {
      lightningcss: false,
    },
    */
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
      domains: [
        'blazed.sirv.com',
        'lh3.googleusercontent.com',
        'firebasestorage.googleapis.com',
        'blz-one-9e383.appspot.com',
        'storage.googleapis.com',
        'blazedlabs.com',
        'cdn.jsdelivr.net',
        'avatars.githubusercontent.com',
        'localhost'
      ],
      formats: ['image/webp']
    }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
//module.exports = withMDX(nextConfig);
export default withMDX(nextConfig);