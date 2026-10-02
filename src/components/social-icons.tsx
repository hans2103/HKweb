// src/components/social-icons.tsx

import { SOCIAL_PROFILES } from '../../lib/constants';
import { Flex } from '../../panda/jsx';
import { socialItem } from '../../panda/recipes';
import Icon from './icon';
import Link from './link';

const SocialLinks = () => (
    <Flex as="nav" aria-label="Sociale media" alignItems="center">
        <Flex as="ul" listStyle="none" m="0" p="0" alignItems="center" justifyContent="flex-end">
            {SOCIAL_PROFILES.map((profile) => (
                <li key={profile.url} className={socialItem()}>
                    <Link
                        href={profile.url}
                        hidden={true}
                        name={'Bekijk mijn profiel op ' + profile.label}>
                        <Icon color="currentColor" icon={profile.icon} size={1.25} />
                    </Link>
                </li>
            ))}
        </Flex>
    </Flex>
);

export default SocialLinks;
