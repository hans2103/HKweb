import styled from 'styled-components';
import Link from 'next/link';

export default ({ href, name }) => (
    <Link href={href} passHref>
        <StyledLink>{name}</StyledLink>
    </Link>
);

const StyledLink = styled.a`
    color: rgb(244,121,20);
    white-space: nowrap;

    + a {
        position: relative;
        margin-left: .75em;
        padding-left: .75em;

        ::before {
            position: absolute;
            content: "|";
            left: 0;
            color: initial;
        }
    }
`;
