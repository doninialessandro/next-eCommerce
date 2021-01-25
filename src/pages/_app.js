import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import { CartContext, useCartState } from '../hooks/useCart'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  const cart = useCartState()

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <CartContext.Provider value={cart}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
