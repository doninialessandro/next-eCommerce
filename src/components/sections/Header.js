import { useState } from 'react'
import Link from 'next/link'

import { Box, Flex, Button, IconButton, Stack } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FiShoppingCart } from 'react-icons/fi'
import { BiHomeSmile } from 'react-icons/bi'

import DarkModeSwitch from '../ui/DarkModeSwitch'

const MenuItem = ({ children, isLast, ...rest }) => (
  <Box
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
    {...rest}
  >
    {children}
  </Box>
)

const Header = props => {
  const { totalItems, checkout, ...rest } = props
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

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
      <Flex align="center">
        <Link href="/">
          <IconButton icon={<BiHomeSmile />} size="sm" rounded="md" />
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          size="sm"
          rounded="md"
          onClick={toggleMenu}
          icon={show ? <CloseIcon /> : <HamburgerIcon />}
        />
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem isLast>
            <Stack direction="row" spacing={4}>
              <DarkModeSwitch />
              <Button
                leftIcon={<FiShoppingCart />}
                variant="solid"
                colorScheme="purple"
                size="sm"
                rounded="md"
                onClick={checkout}
              >
                {totalItems} Check out
              </Button>
            </Stack>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
