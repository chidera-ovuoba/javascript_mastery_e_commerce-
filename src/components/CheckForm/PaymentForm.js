import React from 'react'
import { Typography, Divider } from '@material-ui/core';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import CardCheckout from './CardCheckout';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY );
const PaymentForm = ({ checkoutToken, onCaptureCheckout, backStep, nextStep, timeout, addressData }) => {
    

  const handleSubmit = async (event,elements,stripe) => {
    event.preventDefault();
    // console.log(elements, stripe);
    if (elements || stripe) return
    const cardElement = elements.getElement(CardElement)
    // console.log(cardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    console.log(error, paymentMethod);
    if (error) {
      console.log(error)
    } else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: { firstname: addressData.firstName, lastname: addressData.lastName, email: addressData.email },
        shipping: {
          name: 'Primary',
          street: addressData.address,
          town_city: addressData.city,
          county_state: addressData.shippingSubDivision,
          postal_zip_code: addressData.zip,
          country:addressData.shippingCountry
        },
        fulfilment: { shipping_method: addressData.shipppingOptions },
        payment: {
          gateway: 'stripe',
          payment_method_id: paymentMethod.id
        }
      }
      onCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }

   }


  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
      <Elements stripe={stripePromise}>
        <CardCheckout backStep={backStep} checkoutToken={checkoutToken} handleSubmit={handleSubmit} />
      </Elements>
    </>
  )
}

export default PaymentForm