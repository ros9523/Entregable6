import axios from "axios";
import React from "react";
import getConfig from "../../utils/getConfig";
import './styles/productS.css'

 const ProductCartIndo = ({product, getAllProductsCart}) => {

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }

  console.log(product)

  return (
    <article className="cart__item">
      <header>
        <h3 className="cart">{product.brand}</h3>
        <h4 className="cart__name">{product.title}</h4>
      </header>
      <div className="cart-IS">
        <i onClick={handleDeleteProduct} className=" cart__trash bx bxs-trash"></i>
        <span className="cart__quantity">Amount:{product.productsInCart.quantity}</span>
        </div>
        <hr/>
        <footer className="cart__item-footer">
          <span className="cart__total-label">Total:</span>
          <span className="cart__total-number">850</span>
        </footer>
    </article>
  );
};

export default ProductCartIndo