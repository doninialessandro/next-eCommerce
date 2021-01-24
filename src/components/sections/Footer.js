/* eslint-disable jsx-a11y/accessible-emoji */
import { Flex, Text, Link } from '@chakra-ui/react'

const Footer = () => (
  <Flex as="footer" py="2rem">
    <Text fontSize="xs">
      Devlop with ❤️ from 🏠 by{' '}
      <Link href="https://github.com/doninialessandro" isExternal>
        Ale
      </Link>
    </Text>
  </Flex>
)

export default Footer
