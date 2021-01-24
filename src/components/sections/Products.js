import { v4 as uuidv4 } from 'uuid'

import { Flex, Heading, SimpleGrid, Stack } from '@chakra-ui/react'

import Card from '../ui/Card'

const Products = props => {
  const { products } = props
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
          {products.map(p => (
            <Card
              key={uuidv4()}
              isNew={p.isNew}
              imageUrl={p.imageUrl}
              imageAlt={p.imageAlt}
              title={p.title}
              price={p.price}
            />
          ))}
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
      imageAlt: 'Rear view of modern home with pool',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      price: '$1,900.00',
    },
  ],
}

export default Products
