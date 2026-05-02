// src/components/social-icons.tsx

import { Flex } from '../../panda/jsx';
import { socialItem } from '../../panda/recipes';
import Icon from './icon';
import Link from './link';

type SocialEntry = { icon: string; link: string };

const socialFollow: SocialEntry[] = [
    { icon: 'github', link: 'https://github.com/hans2103' },
    { icon: 'codepen', link: 'https://codepen.io/hans2103' },
    { icon: 'twitter', link: 'https://twitter.com/hans2103' },
    { icon: 'linkedin', link: 'https://linkedin.com/in/hans2103' },
    { icon: 'instagram', link: 'https://instagram.com/hans2103' },
    { icon: 'behance', link: 'https://behance.net/hans2103' }
];

const socialShare: SocialEntry[] = [];

type SocialLinksProps = {
    type?: 'follow' | 'share';
};

const SocialLinks = ({ type }: SocialLinksProps) => {
    const socialList = type === 'follow' ? socialFollow : socialShare;

    return (
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
                        name={'Bekijk mijn profiel op ' + item.icon}>
                        <Icon color="currentColor" icon={item.icon} />
                    </Link>
                </li>
            ))}
        </Flex>
    );
};

export default SocialLinks;
