import { Container, Main, Hero, Products } from '../components'

const Index = () => {
  const products = [
    {
      isNew: true,
      imageUrl: '/images/spacejelly-tshirt.jpg',
      imageAlt: 'Space Jelly Tshirt',
      title: 'Space Jelly Tshirt',
      price: '$50.00',
    },
    {
      isNew: true,
      imageUrl: '/images/spacejelly-stickers.jpg',
      imageAlt: 'Space Jelly Stickers',
      title: 'Space Jelly Stickers',
      price: '$10.00',
    },
    {
      isNew: true,
      imageUrl: '/images/spacejelly-combo.jpg',
      imageAlt: 'Space Jelly Combo',
      title: 'Space Jelly Combo',
      price: '$60.00',
    },
  ]
  return (
    <Container>
      <Main>
        <Hero
          title="Space Shop"
          subtitle="This is an eCommerce application to accept payments & sell products powered by Stripe and built with Next.js and Chakra UI 🔒💸"
          image="/images/wp4923981.jpg"
          ctaText="Do you want to know more? Take a look at soruce code!"
          ctaLink="https://github.com/doninialessandro/next-eCommerce"
          disclaimer="Illustrative purposes only"
        />
        <Products products={products} />
      </Main>
    </Container>
  )
}

export default Index
