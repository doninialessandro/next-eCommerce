import Link from 'next/link'

import { Box, Flex, Button, IconButton, Stack } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { BiHomeSmile } from 'react-icons/bi'

import DarkModeSwitch from '../ui/DarkModeSwitch'

const MenuItem = ({ children, isLast, ...rest }) => (
  <Box mb={{ base: isLast ? 0 : 8 }} mr={{ base: 0 }} display="block" {...rest}>
    {children}
  </Box>
)

const Header = props => {
  const { totalItems, checkout, ...rest } = props

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...rest}
    >
      <Link href="/">
        <IconButton icon={<BiHomeSmile />} size="sm" rounded="md" />
      </Link>

      <Box
        display={{ base: 'none', xs: 'block' }}
        flexBasis={{ base: '100%', xs: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
        >
          <MenuItem isLast>
            <Stack direction="row">
              <DarkModeSwitch />
              {totalItems && (
                <Link href="/cart">
                  <Button
                    leftIcon={<FiShoppingCart />}
                    variant="solid"
                    colorScheme="purple"
                    size="sm"
                    rounded="md"
                  >
                    {totalItems} Check out
                  </Button>
                </Link>
              )}
            </Stack>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
