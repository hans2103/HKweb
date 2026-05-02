// src/layout/hero.tsx

import css from '@styled-system/css';
import styled from 'styled-components';

import { SITE_SUBTITLE, SITE_TITLE } from '../../lib/constants';
import Box, { type BoxProps } from '../components/box';
import Flex from '../components/flex';
import Heading, { type HeadingProps } from '../components/heading';
import Image from '../components/image';

const Component = styled(Flex)<BoxProps>(
    css({
        position: 'relative',
        flexDirection: 'column',
        width: '100%vw',
        height: 'calc(100vh - 4rem - 33px)',
        minHeight: '20rem',
        backgroundColor: 'base'
    })
);

const ComponentContent = styled(Box)<BoxProps>(
    css({
        zIndex: '1',
        color: 'hero',
        textShadow:
            '0px 4px 3px hsla(221, 45%, 28%, 0.4),0px 8px 13px hsla(221, 45%, 28%, 0.1),0px 18px 23px hsla(221, 45%, 28%, 0.1)'
    })
);

const ComponentHeading = styled(Heading)<HeadingProps>(
    css({
        color: 'currentColor',
        fontSize: 'xxl'
    })
);

const ComponentText = styled(Heading)<HeadingProps>(
    css({
        color: 'currentColor',
        fontSize: 'xl'
    })
);

const Hero = () => (
    <Component as="div">
        <Box as="figure" position="relative" height="100%" overflow="hidden">
            <Image
                src="/images/Hans-2020.jpg"
                alt="Hans Kuijpers smiling at the camera"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
            />
        </Box>
        <ComponentContent pb="9vh" pl="3vw">
            <ComponentHeading level={1}>{SITE_TITLE}</ComponentHeading>
            <ComponentText level={2}>{SITE_SUBTITLE}</ComponentText>
        </ComponentContent>
    </Component>
);

export default Hero;
