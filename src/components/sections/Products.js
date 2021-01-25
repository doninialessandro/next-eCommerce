import { Flex, Heading, SimpleGrid, Stack } from '@chakra-ui/react'

import Card from '../ui/Card'

const Products = props => {
  const { products, addToCart } = props
  return (
    <Flex w="100%" px={8} mb={16}>
      <Stack
        spacing={4}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="4xl"
          mb={5}
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontWeight="black"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Products
        </Heading>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {products.map(p => {
            const { id, isNew, image, title, price, description } = p
            return (
              <Card
                key={id}
                id={id}
                isNew={isNew}
                imageUrl={image}
                imageAlt={title}
                title={title}
                description={description}
                price={price}
                addToCart={addToCart}
              />
            )
          })}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}

Products.defaultProps = {
  products: [
    {
      isNew: true,
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Test',
      title: 'Test',
      price: '20',
    },
  ],
  addToCart: () => console.log('Buy'),
}

export default Products
