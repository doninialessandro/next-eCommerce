import { Container, Main, Header, CartContent } from '../components'
import { useCart } from '../hooks/useCart'

const Cart = () => {
  const { cartItems, checkout, updateItem } = useCart()

  return (
    <Container>
      <Main>
        <Header />
        <CartContent
          cartItems={cartItems}
          checkout={checkout}
          updateItem={updateItem}
        />
      </Main>
    </Container>
  )
}

export default Cart
