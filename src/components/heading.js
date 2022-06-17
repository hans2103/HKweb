// components/heading.js

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant, space } from 'styled-system';
//import propTypes from '@styled-system/prop-types';

const variants = {
    1: {
        color: 'base',
        fontFamily: 'heading',
        fontWeight: 'bold',
        lineHeight: 'heading',
        fontSize: 'xl'
    },
    2: {
        color: 'base',
        fontFamily: 'heading',
        fontWeight: 'bold',
        lineHeight: 'heading',
        fontSize: 'l'
    },
    3: {
        color: 'base',
        fontFamily: 'heading',
        fontWeight: 'bold',
        lineHeight: 'heading',
        fontSize: 'm'
    }
};

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => <Component {...props} />;

const Heading = styled(HeadingBase)(
    {
        margin: 0
    },
    variant({
        variants,
        prop: 'level'
    }),
    space
);

HeadingBase.propTypes = {
    level: PropTypes.number.isRequired,
    children: PropTypes.node,
    as: PropTypes.node
};

/** @component */
export default Heading;
