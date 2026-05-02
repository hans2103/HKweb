// src/components/hidden.tsx

import type { ReactNode } from 'react';

import { srOnly } from '../../panda/recipes';

const Hidden = ({ children }: { children: ReactNode }) => (
    <span className={srOnly()}>{children}</span>
);

export default Hidden;
