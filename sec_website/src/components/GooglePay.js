import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import {Checkout, completedPayment} from "./Checkout";

const GooglePay = ({disabled, completedPayment, totalPrice}) => {



    return (
    <div className="Google pay">
    <h1>Checkout</h1>
    <GooglePayButton
        environment="TEST"
        paymentRequest={{
        //Defining API version of Google Pay
        apiVersion: 2,
        apiVersionMinor: 0,
        //Defining supported payment methods & describing support for CARD payment method
        allowedPaymentMethods:[
            {
                type:"CARD",
                parameters:{
                allowedAuthMethods:["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"],
            },
            //Choosing a payment tokenization method
            tokenizationSpecification:{
                type: "PAYMENT_GATEWAY",
                parameters: {
                    gateway:"example",
                    gatewayMerchantID:"exampleGatewayMerchantId",
                    },
                },
            },
        ],
        //Google Pay Test merchant ID
        merchantInfo:{
            merchantId:"12345678901234567890",
            merchantName: "Example Merchant",
        },
        transactionInfo:{
            totalPriceStatus:"FINAL",
            totalPriceLabel:"Total",
            totalPrice:totalPrice.toString(),
            currencyCode:"AUD",
            countryCode:"AU",
        },
        shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        //callback method, once payment is done there will be console log
        onLoadPaymentData={paymentRequest => {
          console.log('Payment Success', paymentRequest);
          completedPayment();
        }}
        //callback for payment authorisation
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
        }}
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
        }}

        existingPaymentMethodRequired="false"
        buttonColor="Black"
        buttonType="buy"
        >
    </GooglePayButton>
    </div>
    );
}

export default GooglePay;