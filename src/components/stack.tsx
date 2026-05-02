// src/components/stack.tsx
//
// Block-layout Stack with margins between children (the "lobotomized owl"
// pattern). Don't use Panda's built-in flex Stack: a flex parent hides
// <ol>/<ul> list markers, which we need for the algemene-voorwaarden page.
//
// Backed by the `stack` recipe in panda.config.ts so each <Stack> renders one
// semantic class (`.stack stack--gap_m`) instead of selector-prefixed atomic
// classes per instance.

import { styled } from '../../panda/jsx';
import { blockStack } from '../../panda/recipes';

const Stack = styled('div', blockStack);

export default Stack;
