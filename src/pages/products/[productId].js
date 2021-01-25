import { Container, Main, Product, Header } from '../../components'

import { useCart } from '../../hooks/useCart'

import products from '../../constants/products.json'

export default function ProductID({ product }) {
  const { id, title, image, price, description } = product

  const { totalItems, addToCart, checkout } = useCart()

  return (
    <Container>
      <Main>
        <Header totalItems={totalItems} checkout={checkout} />
        <Product
          id={id}
          title={title}
          description={description}
          image={image}
          price={price}
          addToCart={addToCart}
        />
      </Main>
    </Container>
  )
}

export async function getStaticProps({ params = {} }) {
  const product = products.find(({ id }) => `${id}` === `${params.productId}`)
  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const paths = products.map(product => {
    const { id } = product
    return {
      params: {
        productId: id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
