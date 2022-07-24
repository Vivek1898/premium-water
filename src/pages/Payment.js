import "../stripe.css";

import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import StripeCheckout from "../components/StripeCheckout";
import { loadStripe } from "@stripe/stripe-js";

// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  return (

    <div className="bg-light">
      <div className="container text-center card">
        <h2><b>Complete your purchase</b></h2>
        <Elements stripe={promise}>
          <div className="col-md-8 offset-md-2">
            <StripeCheckout />
          </div>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
