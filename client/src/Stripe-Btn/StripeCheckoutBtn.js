import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../logo.svg";
import swal from "sweetalert";

const StripeCheckoutBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Y5JFMpwzUJlwGsClC6vKoBmR00kICjwIE7";
  const onToken = token => {
    swal("Your Payment is Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Veganease LLC."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Make Payment"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutBtn;
