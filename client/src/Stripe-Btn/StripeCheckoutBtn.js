import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../logo.svg";

const StripeCheckoutBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Mh0rj0QJ4h9k6GZZLRifKtab00jGP8j6FK";
  const onToken = token => {
    console.log("ERROR");
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
