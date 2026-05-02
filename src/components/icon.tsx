// src/components/icon.tsx

import { icons } from '../../lib/icons';

type IconProps = {
    icon: string;
    size?: number;
    color?: string;
};

const Icon = ({ icon, size = 1, color }: IconProps) => (
    <svg width={`${size}em`} height={`${size}em`} viewBox="0 0 24 24" aria-hidden="true">
        <path style={{ fill: color }} d={icons[icon]} />
    </svg>
);

export default Icon;
