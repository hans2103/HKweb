import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Heading from '../heading';

describe('Heading', () => {
    it('renders an h1 when level is 1', () => {
        render(<Heading level={1}>Title</Heading>);
        expect(screen.getByRole('heading', { level: 1, name: 'Title' })).toBeInTheDocument();
    });

    it('renders an h2 when level is 2', () => {
        render(<Heading level={2}>Subhead</Heading>);
        expect(screen.getByRole('heading', { level: 2, name: 'Subhead' })).toBeInTheDocument();
    });

    it('respects an explicit `as` override', () => {
        render(
            <Heading level={2} as="h3">
                As h3
            </Heading>
        );
        expect(screen.getByRole('heading', { level: 3, name: 'As h3' })).toBeInTheDocument();
    });
});
