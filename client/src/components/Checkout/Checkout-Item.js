import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../actions/cartActions";
import Trash from "../../img/trash.svg";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { title, image, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="checkout-item">
        <div className="checkout-item___img-container">
          <img
            src={image}
            alt="Checkout Item"
            className="checkout-item__image"
          />
        </div>
        <p className="checkout-item__title">{title}</p>
        <p className="checkout-item__quantity">
          <div onClick={() => removeItem(cartItem)} className="arrow">
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div onClick={() => addItem(cartItem)} className="arrow">
            &#10095;
          </div>
        </p>
        <p className="checkout-item__price">${price}</p>
        <div onClick={() => clearItem(cartItem)} className="remove-icon">
          <img src={Trash} alt="Trash Can Icon" />
        </div>
      </div>
    </div>
  );
};

const mapDisptachToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDisptachToProps
)(CheckoutItem);
