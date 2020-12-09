import styled from 'styled-components'
import Link from 'next/link'

const Named = ({ href, name }) => {
    return (
        <Link href={href} passHref>
            <StyledLink>{name}</StyledLink>
        </Link>
    )
}

export default Named

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
`
