import { useState } from 'react'
import { Box, Flex, Text, Button, IconButton } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import DarkModeSwitch from '../ui/DarkModeSwitch'

const MenuItem = ({ children, isLast, ...rest }) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
    {...rest}
  >
    {children}
  </Text>
)

const Header = props => {
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
      {...props}
    >
      <Flex align="center">
        <DarkModeSwitch />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
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
          <MenuItem to="/signup" isLast>
            <Button size="sm" rounded="md">
              HOME
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
