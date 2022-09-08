import axios from 'axios'
import { createBrowserHistory } from 'history'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartIndo from '../cart/ProductCartIndo'
import './styles/cart.css'

const Cart = () => {

const [cartProducts, setCartProducts] = useState()
const [totalPrice, setTotalPrice]=useState()

    const getAllProductsCart = () => {

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      axios.get(URL, getConfig())
        .then(res => 
          setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts())
    
    }
  
    useEffect(()=>{
      getAllProductsCart()
  }, [])

    const handleCheckout = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      const obj = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"
      }
      axios.post(URL, obj, getConfig())
        .then(res => {
          console.log(res.data)
          getAllProductsCart()
        })
        .catch(err => console.log(err))
    }
  

console.log(cartProducts)

  return (
    <section className='cart'>
        <h2>Cart</h2>
        <div className='cart__container-item'>
        {
          cartProducts?.map(product => (
            <ProductCartIndo
              key={product.id}
              product={product}
              getAllProductsCart={getAllProductsCart}
            />
          ))
        }
      </div>
        <hr className='cart__hr'/>
        <footer className='cart__footer'>
            <span className='cart__total-global'>Total:</span>
            <span className='cart__total-global-label-value'>Es un regalo</span>
            <button className="checkout" onClick={handleCheckout}>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart