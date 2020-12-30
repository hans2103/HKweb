// src/components/image.js

import NextImage from 'next/image';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const Image = ({ src, alt, ...props }) => {
    return <NextImage src={src} alt={alt} {...props} />;
};

Image.propTypes = {
    ...propTypes.space,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

/** @component */
export default Image;
