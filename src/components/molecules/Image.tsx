import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';

interface Props extends Omit<NextImageProps, 'src' | 'alt'> {
    src: string;
    alt: string;
}

const Image: React.FC<Props> = ({ src, alt, ...rest }) => {
    return <NextImage src={src} alt={alt} {...rest} />;
};

export default Image;
