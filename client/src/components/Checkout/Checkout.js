import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./Checkout-Item";
import StripeCheckoutBtn from "../../Stripe-Btn/StripeCheckoutBtn";

import { selectCartItems, selectCartTotal } from "../Cart/Cart-Selector";

const CheckoutPage = ({ cartItems, cartItem, total }) => {
  return (
    <React.Fragment>
      <div className="checkout-page">
        <h3>Checkout</h3>
        {cartItems.map(cartItem => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <div className="total-price">Payment Due: &nbsp;${total}</div>
      <div>
        <StripeCheckoutBtn cartItem={cartItem} price={total} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
