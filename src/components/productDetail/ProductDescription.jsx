import React, { useState } from "react";
import "../productDetail/styles/ProductDescription.css"


const ProductDescription = ({ productInfo }) => {
  const [counter, setCounter] = useState(1);

  const handlePlus = () => setCounter(counter + 1);

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1);
    }
  };

  console.log(productInfo);

  return (
    <section className="section_description">
      <div>
        <h2 className="product-description__name">{productInfo?.title}</h2>
        <img className="image_eti"src={productInfo?.productImgs[0]} alt="" />
      </div>
      <div>
        <p className="product-description__description">
          {productInfo?.description}
        </p>
        <div className="product-description--elements">
          <article className="product-info__price">
            <h3 className="product-info__price-label">price</h3>
            <span className="product-info__price-value">
              {productInfo?.price}
            </span>
          </article>
          <article>
            <h3 className="product-info__quantity-label">Quantity</h3>
            <div className="product-info__quantity-">
              <button onClick={handleMinus}>-</button>
              <button>{counter}</button>
              <button onClick={handlePlus}>+</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
