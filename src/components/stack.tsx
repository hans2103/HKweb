// src/components/stack.tsx
//
// Block-layout Stack with margins between children (the "lobotomized owl"
// pattern). Don't use Panda's built-in flex Stack: a flex parent hides
// <ol>/<ul> list markers, which we need for the algemene-voorwaarden page.
//
// Backed by the `blockStack` recipe in panda.config.ts so each <Stack> renders
// semantic classes (`.block-stack block-stack--gap_m`) instead of selector-prefixed
// atomic classes per instance. The recipe needs `jsx: ['Stack']`, or Panda never
// sees it used and emits no CSS.

import { styled } from '../../panda/jsx';
import { blockStack } from '../../panda/recipes';

const Stack = styled('div', blockStack);

export default Stack;
