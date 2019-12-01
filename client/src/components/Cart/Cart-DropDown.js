import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../Cart/Cart-Selector";
import { toggleCartHidden } from "../../actions/cartActions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CartItem from "./CartItem";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="cart-msg">Your Cart Is Empty</span>
      )}
    </div>
    <button
      className="btn btn__checkout"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
