// src/components/heading.tsx

import type { ElementType, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { space, type SpaceProps, variant } from 'styled-system';

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
} as const;

type HeadingLevel = 1 | 2 | 3;

type HeadingBaseProps = HTMLAttributes<HTMLHeadingElement> & {
    level: HeadingLevel;
    as?: ElementType;
};

const HeadingBase = ({ level, as, ...props }: HeadingBaseProps) => {
    const Tag = (as ?? `h${level}`) as ElementType;
    return <Tag {...props} />;
};

export type HeadingProps = SpaceProps & HeadingBaseProps;

const Heading = styled(HeadingBase)<HeadingProps>(
    {
        margin: 0
    },
    variant({
        variants,
        prop: 'level'
    }),
    space
);

export default Heading;
