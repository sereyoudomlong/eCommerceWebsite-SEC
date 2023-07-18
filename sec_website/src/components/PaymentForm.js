import InputField           from "./InputField";
import SubmitButton         from "./SubmitButton";
import React from 'react';

const doCheckout = () => {
    if (!firstname) {
        return;
    }
    if (!lastname) {
        return;
    }
    if (!email) {
        return;
    }
    if (!address) {
        return;
    }
    if (!city) {
        return;
    }
    if (!lastname) {
        return;
    }
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        city: city,
        zip: zip,
        state: state,
    }
    //const url = 'http://localhost:8080/' not too sure with this...
    return (
        <div className="container">
    <div align='center' className="paymentForm">
        <div className="subPaymentTitle">Billing Address</div>
        <InputField
            type='text'
            placeholder='First Name'
            value={firstname ? firstname : ''}
            onChange={ (value) => setInputValue('firstname', value) }
        />
        <InputField
            type='text'
            placeholder='Last Name'
            value={lastname ? lastname : ''}
            onChange={ (value) => setInputValue('lastname', value) }
        />
        <InputField
            type='text'
            placeholder='Email'
            value={email ? email : ''}
            onChange={ (value) => setInputValue('password', value) }
        />
        <InputField
            type='text'
            placeholder='Address'
            value={address ? address : ''}
            onChange={ (value) => setInputValue('address', value) }
        />
        <InputField
            type='text'
            placeholder='City'
            value={city ? city : ''}
            onChange={ (value) => setInputValue('city', value) }
        />
        <InputField
            type='text'
            placeholder='Zip'
            value={zip ? zip : ''}
            onChange={ (value) => setInputValue('zip', value) }
        />
        <InputField
            type='text'
            placeholder='State'
            value={state ? state : ''}
            onChange={ (value) => setInputValue('state', value) }
        />
        <SubmitButton
            text = 'Proceed to Checkout'
            disabled={buttonDisabled}
            onClick={ () => doCheckout() }
        />
    </div>
        </div>
    );
}

export default doCheckout;