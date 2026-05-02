// src/layout/hero.tsx

import { SITE_SUBTITLE, SITE_TITLE } from '../../lib/constants';
import { Box, Flex, styled } from '../../panda/jsx';
import Heading from '../components/heading';
import Image from '../components/image';

// styled(Heading, ...) is fine — Heading is a regular React component, not a
// Panda pattern, so the recipe's base classes propagate. Don't wrap Panda's
// Flex/Box this way: it drops the pattern's `display: flex` / `box-sizing`.
const HeroHeading = styled(Heading, {
    base: { color: 'currentColor', fontSize: 'xxl' }
});

const HeroSubheading = styled(Heading, {
    base: { color: 'currentColor', fontSize: 'xl' }
});

const Hero = () => (
    <Flex
        position="relative"
        direction="column"
        width="full"
        height="heroHeight"
        minHeight="heroMin"
        backgroundColor="base">
        <Box as="figure" m="0" height="full" overflow="hidden">
            <Image
                src="/images/Hans-2020.jpg"
                alt="Hans Kuijpers smiling at the camera"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
            />
        </Box>
        <Box
            zIndex={1}
            color="hero"
            textShadow="headline"
            pb="pageBottom"
            pl="pageInline">
            <HeroHeading level={1}>{SITE_TITLE}</HeroHeading>
            <HeroSubheading level={2}>{SITE_SUBTITLE}</HeroSubheading>
        </Box>
    </Flex>
);

export default Hero;
