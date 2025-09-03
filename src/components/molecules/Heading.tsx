import { ElementType, ReactNode, useMemo, CSSProperties } from 'react';
import { slugify } from '@/functions/slugify';
import { extractVisibleText } from '@/functions/extractVisibleText';
import clsx from 'clsx';

type HeadingSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface HeadingProps {
    level?: number;
    children: string | ReactNode;
    size?: HeadingSize;
    className?: string;
    style?: CSSProperties;
    id?: string;
    hideId?: boolean;
    tabIndex?: number;
    as?: ElementType;
    ariaLabel?: string;
}

const Heading = ({
                     children,
                     level = 2,
                     size = 's',
                     className,
                     style,
                     id,
                     hideId = false,
                     tabIndex,
                     as,
                 }: HeadingProps) => {
    const levelClamped = Math.min(6, Math.max(1, level));
    const defaultTag = `h${levelClamped}` as ElementType;
    const Tag = as && as !== defaultTag ? as : defaultTag;

    const computedClassNames = clsx(
        `heading:${size}`,
        className
    );

    const computedId = useMemo(() => {
        if (id || hideId) return id;
        return slugify(extractVisibleText(children));
    }, [id, hideId, children]);

    return (
        <Tag
            className={computedClassNames}
            id={hideId ? undefined : computedId}
            style={style}
            tabIndex={tabIndex}
        >
            {children}
        </Tag>
    );
};

export default Heading;
