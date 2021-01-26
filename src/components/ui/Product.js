import { PlusSquareIcon } from '@chakra-ui/icons'

import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  useToast,
} from '@chakra-ui/react'

const Product = ({ id, title, description, image, price, addToCart }) => {
  const toast = useToast()

  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Box
        w={{ base: '80%', sm: '60%', md: '50%' }}
        mb={{ base: 12, md: 0 }}
        border="1px"
        borderColor="gray.200"
        rounded="1rem"
      >
        <Image src={image} rounded="1rem" />
      </Box>
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        mb={16}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="4xl"
          pb={2}
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontWeight="black"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {description}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          ${price}
        </Heading>

        <Button
          colorScheme="purple"
          variant="solid"
          onClick={() => {
            toast({
              title: '👌 Item added',
              description: "🛍️ we've added the item to your cart for you",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            return addToCart({ id })
          }}
          leftIcon={<PlusSquareIcon />}
        >
          Add
        </Button>
      </Stack>
    </Flex>
  )
}

export default Product
