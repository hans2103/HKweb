import styled from 'styled-components';
import Link from '../components/Link';

export default () => (
    <Container>
        <Link
            href="mailto:info@hkweb.nl"
            name="info@hkweb.nl" />
        <Link
            href="tel:+31 (0)6 5422 4518"
            name="06 - 5422 4518" />
    </Container>
);

const Container = styled.div `
	padding: .75em 0;
`;
