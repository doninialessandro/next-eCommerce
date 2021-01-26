import { Container, Main, Header, CartTable } from '../components'
import { useCart } from '../hooks/useCart'

const Cart = () => {
  const { cartItems, checkout } = useCart()

  return (
    <Container>
      <Main>
        <Header />
        <CartTable cartItems={cartItems} checkout={checkout} />
      </Main>
    </Container>
  )
}

export default Cart
