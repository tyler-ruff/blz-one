/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import rehypeExternalLinks from 'rehype-external-links';

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
      domains: [
        'blazed.sirv.com',
        'lh3.googleusercontent.com',
        'firebasestorage.googleapis.com',
        'blz-one-9e383.appspot.com',
        'storage.googleapis.com',
        'blazedlabs.com'
      ],
      formats: ['image/webp']
    }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeExternalLinks({target: ['_blank']})
    ],
    extension: /\.(md|mdx)$/,
  }
});
//module.exports = withMDX(nextConfig);
export default withMDX(nextConfig);