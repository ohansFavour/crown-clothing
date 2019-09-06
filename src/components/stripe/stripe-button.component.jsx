import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{
const priceForStripe = price * 100;
const publishablekey = "pk_test_hnSwPCITGlVorvQAbpKglEmW00VZYBHs6E";
const onToken = token=>{
 console.log(token);   
 alert("Payment Confirmed")
}
return(
    <StripeCheckout
    label ="Pay Now"
    name="Crown Clothing Ltd."
    billingAddress
    shippingAddressimage="https://svgshare.com/i/CUz.svg"
    description = {`Your total is $${price}`}
    amount ={priceForStripe}
    paanelLabel = "Pay Now"
    token ={onToken}
    stripeKey = {publishablekey}

    />
);
}

export default StripeCheckoutButton;