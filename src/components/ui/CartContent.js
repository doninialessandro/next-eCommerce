/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  TableCaption,
  Flex,
  Box,
  Button,
  Heading,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { FiShoppingCart } from 'react-icons/fi'

import products from '../../constants/products.json'

const CartContent = props => {
  const { cartItems, checkout, updateItem } = props
  const data = cartItems.map(item => {
    const Quantity = () => {
      const changeQuantity = v => {
        updateItem({ id: item.id, quantity: v && parseInt(v, 10) })
      }
      return (
        <NumberInput
          defaultValue={item.quantity}
          min={0}
          max={999}
          maxW={20}
          onChange={changeQuantity}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )
    }

    const product = products.find(({ id }) => id === item.id)

    return {
      ...item,
      quantity: <Quantity />,
      total: item.quantity * item.pricePerUnit,
      title: product.title,
    }
  })

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
        w={{ base: '100%', sm: '100%', md: '50%' }}
        mb={{ base: 12, md: 0 }}
        border="1px"
        borderColor="gray.200"
        rounded="1rem"
      >
        <Table variant="striped" shadow="2xl">
          <TableCaption>Your cart</TableCaption>
          <Thead>
            <Tr>
              <Th>Product Name</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>PPU (€)</Th>
              <Th isNumeric>Total (€)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(d => (
              <Tr key={d.id}>
                <Td>{d.title}</Td>
                <Td isNumeric>{d.quantity}</Td>
                <Td isNumeric>{d.pricePerUnit}</Td>
                <Td isNumeric>{d.total}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th />
              <Th />
              <Th />
              <Th isNumeric>{data.reduce((a, v) => a + v.total, 0)}</Th>
            </Tr>
          </Tfoot>
        </Table>
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
          🛍️ Have you got everything you want ?
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
          🔥 If yes, click on checkout button to proceed, otherwise go back and
          add what you need.
        </Heading>

        <Button
          colorScheme="purple"
          variant="solid"
          size="lg"
          onClick={checkout}
          leftIcon={<FiShoppingCart />}
        >
          € {data.reduce((a, v) => a + v.total, 0)} Check out
        </Button>
      </Stack>
    </Flex>
  )
}

export default CartContent
