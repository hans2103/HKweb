// src/components/image.tsx

import NextImage, { type ImageLoader, type ImageProps } from 'next/image';

const imageKitLoader: ImageLoader = ({ src, width, quality }) => {
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    return `https://ik.imagekit.io/hkweb/${cleanSrc}?tr=${params.join(',')}`;
};

const Image = (props: ImageProps) => <NextImage loader={imageKitLoader} {...props} />;

export default Image;
