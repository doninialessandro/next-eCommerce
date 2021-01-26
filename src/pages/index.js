import Link from 'next/link'

import { Text, Stack, Button, Flex } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { GiTakeMyMoney } from 'react-icons/gi'

import { Container, Main, Hero, Header, Products } from '../components'
import { useCart } from '../hooks/useCart'

const Index = () => {
  const { products, subtotal, totalItems, addToCart, checkout } = useCart()

  return (
    <Container>
      <Main>
        <Header totalItems={totalItems} checkout={checkout} />
        <Hero
          title="Space Shop"
          subtitle="This is an eCommerce application to accept payments & sell products powered by Stripe and built with Next.js and Chakra UI 🔒💸"
          image="/images/wp4923981.jpg"
          ctaText="Source code"
          ctaLink="https://github.com/doninialessandro/next-eCommerce"
          disclaimer="Illustrative purposes only"
        />
        <Products products={products} addToCart={data => addToCart(data)} />
        <Flex w="100%" px={8} mb={16}>
          <Stack
            direction="row"
            spacing={4}
            align="center"
            justifyContent="flex-end"
            w="100%"
          >
            <GiTakeMyMoney style={{ marginRight: -10 }} />
            <Text>
              <strong>Total:</strong> €{subtotal}
            </Text>
            <Link href="/cart">
              <Button
                leftIcon={<FiShoppingCart />}
                variant="solid"
                colorScheme="purple"
                rounded="md"
              >
                {totalItems} Check out
              </Button>
            </Link>
          </Stack>
        </Flex>
        <br />
      </Main>
    </Container>
  )
}

export default Index
