// src/components/icons.js

import PropTypes from 'prop-types';
import { icons } from '../../lib/icons';

const Icon = (props) => {
    const styles = {
        svg: {},
        path: {
            fill: props.color
        }
    };

    return (
        <svg
            style={styles.svg}
            width={`${props.size}em`}
            height={`${props.size}em`}
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path style={styles.path} d={icons[props.icon]} />
        </svg>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string
};

Icon.defaultProps = {
    size: 1
};

export default Icon;
