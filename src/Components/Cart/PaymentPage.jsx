// PaymentPage.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PslHS01P2oidCoNPCsWFgAShz1RRAl1EmD6NJ2qqXZoLRc956VPV4kM1KNuIyBCovRhH7ALgxMhLSf1Jt0FyIXJ00qL2TFHSR');

function CheckoutForm({ total, shipping }) {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // Here you would send the payment method ID to your server
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <CardElement />
            </div>
            <button
                className="w-full text-center bg-blue-500 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-blue-600"
                type="submit"
                disabled={!stripe}
            >
                Pay Now
            </button>
        </form>
    );
}

function PaymentPage({ total = 0, shipping = 0 }) {
    return (
        <div className="p-4 bg-gray-50 w-full max-w-lg mx-auto mt-10">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black py-8 border-b border-gray-300">
                Payment
            </h2>
            <div className="mt-8">
                <div className="flex items-center justify-between pb-6 pr-3">
                    <p className="font-normal text-lg leading-8 text-black">Total</p>
                    <p className="font-medium text-lg leading-8 text-black">${total.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pb-6 pr-3">
                    <p className="font-normal text-lg leading-8 text-black">Shipping</p>
                    <p className="font-medium text-lg leading-8 text-black">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pb-6 pr-3">
                    <p className="font-normal text-lg leading-8 text-black">Grand Total</p>
                    <p className="font-bold text-lg leading-8 text-black">${(total + shipping).toFixed(2)}</p>
                </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm total={total} shipping={shipping} />
                </Elements>
            </div>
        </div>
    );
}

export default PaymentPage;
