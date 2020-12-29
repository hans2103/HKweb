// componentes/layout/Footer.js

import Box from '../components/box';
import ItemList from '../components/itemlist';
import Stack from '../components/stack';
import Text from '../components/text';
import Button from '../components/button'
import Link from 'next/link'

export default function Footer () {
    return (
        <Box as='footer' p={2}>
            <Stack gap="2rem">
                    <ItemList mr={3}
                              items={[
                                  {
                                      link: 'https://github.com/hans2103',
                                      title: 'GitHub'
                                  },
                                  {
                                      link: 'https://instagram.com/hans2103',
                                      title: 'Instagram'
                                  },
                                  {
                                      link: 'https://twitter.com/hans2103',
                                      title: 'Twitter'
                                  }
                              ]}
                    />
                    <Box ml='auto'>
                        <Text>
                        Copyright &copy; {new Date().getFullYear() + ' '} Hans Kuijpers
                        </Text>
                    </Box>
                <Link href="/docs"><a>Docs</a></Link>
                <Button variant="secondary">Secondary button</Button>
                Disabled buttons:

                <Button variant="primary" disabled>Primary button</Button>
                <Button variant="secondary" disabled>Secondary button</Button>
                Link buttons:

                <Button variant="primary" as="a" href="/">Primary button</Button>
                <Button variant="secondary" as="a" href="/">Secondary button</Button>
            </Stack>
        </Box>
    );
}
