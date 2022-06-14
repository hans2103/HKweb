// src/components/image.js

import NextImage from 'next/image';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const imageKitLoader = ({ src, width, quality }) => {
    if (src[0] === '/') src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(',');
    let urlEndpoint = 'https://ik.imagekit.io/hkweb';
    if (urlEndpoint[urlEndpoint.length - 1] === '/')
        urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

const Image = (props) => {
    return <NextImage loader={imageKitLoader} src={props.src} alt={props.alt} {...props} />;
};

Image.propTypes = {
    ...propTypes.space,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

/** @component */
export default Image;
