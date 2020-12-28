// componentes/layout/Footer.js

import Box from '../design-system/box';
import Container from '../container';
import ItemList from '../design-system/itemlist';
import Flex from '../design-system/flex';
import Stack from '../design-system/stack';
import Grid from '../design-system/grid';

export default function Footer () {
    return (
        <Box as='footer' p={2}>
            <Stack gap={3}>
                <Grid
                    gridGap={3}
                    justifyContent={[null, 'start']}
                    gridAutoFlow={[null, 'column']}
                >
                    <span>foo</span>
                    <span>bar</span>
                    <span>baz</span>
                </Grid>
                <Flex>
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
                    <Box ml='auto'>Bar</Box>
                </Flex>
            </Stack>


            <Container className='bg-secondary'></Container>
            <div className='bg-primary py-4 text-primary'>
                <div className='container mx-auto px-4'>
                    <div className='-mx-4 flex flex-wrap justify-between'>
                        <div className='px-4 w-full text-center sm:w-auto sm:text-left text-sm'>
                            Copyright &copy; {new Date().getFullYear() + ' '}
                            Hans Kuijpers
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}
