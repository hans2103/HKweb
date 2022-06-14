// src/layout/hero/js

import styled from 'styled-components';
import css from '@styled-system/css';
import Image from '../components/image';
import Box from '../components/box';
import Flex from '../components/flex';
import Heading from '../components/heading';
import { SITE_TITLE, SITE_SUBTITLE } from '../../lib/constants';

const Component = styled(Flex)(
    css({
        position: 'relative',
        flexDirection: 'column',
        width: '100%vw',
        height: 'calc(100vh - 4rem - 33px)',
        minHeight: '20rem',
        backgroundColor: 'base'
    })
);

const ComponentContent = styled(Box)(
    css({
        zIndex: '1',
        color: 'hero',
        textShadow:
            '0px 4px 3px hsla(221, 45%, 28%, 0.4),0px 8px 13px hsla(221, 45%, 28%, 0.1),0px 18px 23px hsla(221, 45%, 28%, 0.1)'
    })
);

const ComponentHeading = styled(Heading)(
    css({
        color: 'currentColor',
        fontSize: 'xxl'
    })
);

const ComponentText = styled(Heading)(
    css({
        color: 'currentColor',
        fontSize: 'xl'
    })
);

const Hero = () => {
    return (
        <Component as="div">
            <Box as="figure" position="fixed" height="100%" overflow="hidden" zIndex="-1">
                <Image
                    src="/images/Hans-2020.jpg"
                    alt="Hans Kuijpers smiling at the camera"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <ComponentContent pb="9vh" pl="3vw">
                <ComponentHeading level={1}>{SITE_TITLE}</ComponentHeading>
                <ComponentText level={2}>{SITE_SUBTITLE}</ComponentText>
            </ComponentContent>
        </Component>
    );
};

/** @component */
export default Hero;
