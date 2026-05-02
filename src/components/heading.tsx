// src/components/heading.tsx

import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { heading } from '../../panda/recipes';

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = ComponentPropsWithoutRef<'h1'> & {
    level: HeadingLevel;
    as?: ElementType;
};

const Heading = ({ level, as, className, children, ...rest }: HeadingProps) => {
    const Tag = (as ?? `h${level}`) as ElementType;
    const recipeClass = heading({ level: String(level) as '1' | '2' | '3' });
    return (
        <Tag className={[recipeClass, className].filter(Boolean).join(' ')} {...rest}>
            {children}
        </Tag>
    );
};

export default Heading;
