// pages/index.js

import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Stack from '../components/Stack'

const Index = () => {
  return (
    <Flex as="main" justifyContent="center" alignItems="center" height="100vh">
      <Stack gap={5}>
        <Heading level={1}>Hans Kuijpers, happy frontend developer</Heading>
      </Stack>
    </Flex>
  )
}

export default Index
