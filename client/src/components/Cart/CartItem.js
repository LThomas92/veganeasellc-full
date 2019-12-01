import React from "react";

const Cartitem = ({ item: { title, price, quantity, image } }) => (
  <div className="cart-item">
    <img src={image} alt="Cart Item" className="cart-item__img" />
    <div className="cart-item__text">
      <span className="cart-item__title">{title}</span>
      <span className="cart-item__price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default Cartitem;
