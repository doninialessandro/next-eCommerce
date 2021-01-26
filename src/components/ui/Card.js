import Link from 'next/link'

import { Box, Image, Badge, Button } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

const Card = props => {
  const {
    id,
    isNew,
    imageUrl,
    imageAlt,
    title,
    description,
    price,
    addToCart,
  } = props
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: '2xl' }}
    >
      <Link href={`/products/${id}`}>
        <a>
          <Image src={imageUrl} alt={imageAlt} />
        </a>
      </Link>
      <Box p="6">
        {isNew && (
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="purple">
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

        <Box>€{price}</Box>

        <Box mt="1" fontWeight="semibold" as="p" isTruncated noOfLines={2}>
          {description}
        </Box>
        <br />
        <Button
          colorScheme="purple"
          variant="solid"
          onClick={() => addToCart({ id })}
          leftIcon={<PlusSquareIcon />}
        >
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default Card
