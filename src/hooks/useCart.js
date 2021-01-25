import { useState, createContext, useContext } from 'react'

import { initiateCheckout } from '../lib/payment'
import products from '../constants/products.json'

const defaultCart = {
  products: {},
}

export const CartContext = createContext()

export function useCart() {
  const cart = useContext(CartContext)
  return cart
}

export const useCartState = () => {
  const [cart, setCart] = useState(defaultCart)

  const cartItems = Object.keys(cart.products).map(key => {
    const product = products.find(({ id }) => `${id}` === `${key}`)
    return {
      ...cart.products[key],
      pricePerUnit: product.price,
    }
  })

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerUnit, quantity }) =>
      accumulator + pricePerUnit * quantity,
    0
  )

  const totalItems = cartItems.reduce(
    (accumulator, { quantity }) => accumulator + quantity,
    0
  )

  const addToCart = ({ id } = {}) => {
    setCart(prev => {
      const newCart = { ...prev }

      if (newCart.products[id]) {
        newCart.products[id].quantity += 1
      } else {
        newCart.products[id] = {
          id,
          quantity: 1,
        }
      }

      return newCart
    })
  }

  const checkout = () => {
    initiateCheckout({
      lineItems: cartItems.map(({ id, quantity }) => ({
        price: id,
        quantity,
      })),
    })
  }

  return {
    products,
    cart,
    subtotal,
    totalItems,
    addToCart,
    checkout,
  }
}
