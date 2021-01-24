import { Box, Image, Badge } from '@chakra-ui/react'

const Card = props => {
  const { isNew, imageUrl, imageAlt, title, price } = props
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: '2xl' }}
    >
      <Image src={imageUrl} alt={imageAlt} />
      <Box p="6">
        {isNew && (
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>
        )}

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>{price}</Box>
      </Box>
    </Box>
  )
}

Card.defaultProps = {
  isNew: true,
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Rear view of modern home with pool',
  title: 'Modern home in city center in the heart of historic Los Angeles',
  price: '$1,900.00',
}

export default Card
