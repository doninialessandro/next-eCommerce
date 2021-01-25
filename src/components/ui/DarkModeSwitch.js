import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      size="sm"
      rounded="md"
      onClick={toggleColorMode}
      icon={isDark ? <MoonIcon /> : <SunIcon />}
    />
  )
}

export default DarkModeSwitch
