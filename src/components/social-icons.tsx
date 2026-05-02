// src/components/social-icons.tsx

import css from '@styled-system/css';
import styled from 'styled-components';

import { type BoxProps } from './box';
import Flex from './flex';
import Icon from './icon';
import Link from './link';
import Text, { type TextProps } from './text';

const List = styled(Flex)<BoxProps>(
    css({
        listStyle: 'none'
    })
);

const Item = styled(Text)<TextProps>`
    & + &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin: 0 1ch;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: currentColor;
    }
`;

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
    alignItems?: string;
    justifyContent?: string;
};

const SocialLinks = ({ type, alignItems, justifyContent }: SocialLinksProps) => {
    const socialList = type === 'follow' ? socialFollow : socialShare;

    return (
        <List as="ul" m="0" alignItems={alignItems} justifyContent={justifyContent}>
            {socialList.map((item) => (
                <Item as="li" key={item.link}>
                    <Link
                        href={item.link}
                        hidden={true}
                        name={'Bekijk mijn profiel op ' + item.icon}>
                        <Icon color="currentColor" icon={item.icon} />
                    </Link>
                </Item>
            ))}
        </List>
    );
};

export default SocialLinks;
