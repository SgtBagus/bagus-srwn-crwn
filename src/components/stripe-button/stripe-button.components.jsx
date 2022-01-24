import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({
    price,
}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KLMVKCYDkFYSkGGzR9os3Qsr9D3oH1i1rByOMQYOPWyxaXOo46KnlHbxKLfag2aKl74CxFVLYu3mIfeQ7WcZ6oc00x3loj57Q';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;