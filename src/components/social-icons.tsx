// src/components/social-icons.tsx

import { Flex } from '../../panda/jsx';
import { socialItem } from '../../panda/recipes';
import Icon from './icon';
import Link from './link';

type SocialEntry = { icon: string; label: string; link: string };

const socialFollow: SocialEntry[] = [
    { icon: 'github', label: 'GitHub', link: 'https://github.com/hans2103' },
    { icon: 'codepen', label: 'CodePen', link: 'https://codepen.io/hans2103' },
    { icon: 'twitter', label: 'X (Twitter)', link: 'https://twitter.com/hans2103' },
    { icon: 'linkedin', label: 'LinkedIn', link: 'https://linkedin.com/in/hans2103' },
    { icon: 'instagram', label: 'Instagram', link: 'https://instagram.com/hans2103' },
    { icon: 'behance', label: 'Behance', link: 'https://behance.net/hans2103' }
];

const socialShare: SocialEntry[] = [];

type SocialLinksProps = {
    type?: 'follow' | 'share';
};

const SocialLinks = ({ type }: SocialLinksProps) => {
    const socialList = type === 'follow' ? socialFollow : socialShare;

    return (
        <Flex as="nav" aria-label="Sociale media" alignItems="center">
            <Flex
                as="ul"
                listStyle="none"
                m="0"
                p="0"
                alignItems="center"
                justifyContent="flex-end">
                {socialList.map((item) => (
                    <li key={item.link} className={socialItem()}>
                        <Link
                            href={item.link}
                            hidden={true}
                            name={'Bekijk mijn profiel op ' + item.label}>
                            <Icon color="currentColor" icon={item.icon} />
                        </Link>
                    </li>
                ))}
            </Flex>
        </Flex>
    );
};

export default SocialLinks;
