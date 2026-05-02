// src/components/button.tsx

import css from '@styled-system/css';
import type { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const variants = {
    primary: {
        color: 'background',
        backgroundColor: 'primary'
    },
    secondary: {
        color: 'primary',
        backgroundColor: 'background'
    }
} as const;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
};

const Button = styled.button.attrs<ButtonProps>((props) => ({
    variant: props.variant ?? 'secondary'
}))<ButtonProps>(
    css({
        px: 4,
        py: 3,
        border: `thin`,
        borderColor: 'primary',
        borderRadius: 'round',
        fontSize: 'm',
        fontFamily: 'body',
        textDecoration: 'none',
        boxSizing: 'border-box',
        display: 'inline-block',
        textAlign: 'center',

        '&:hover:not(:disabled), &:active:not(:disabled), &:focus': {
            outline: 0,
            color: 'background',
            borderColor: 'accent',
            backgroundColor: 'accent',
            cursor: 'pointer'
        },

        '&:disabled': {
            opacity: 0.6,
            filter: 'saturate(60%)'
        }
    }),
    variant({ variants })
);

export default Button;
