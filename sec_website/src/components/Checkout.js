import React, {useEffect, useState} from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { container, checkoutButtonContainer, checkoutButton, cartTotal } from '../App.css'
import ProductPage from './ProductPage';
import {userStore} from "../lib/userStore";
import {cartStore} from "../lib/cartStore";
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Autocomplete from "react-google-autocomplete";
import GooglePay from "./GooglePay";
import {postFetch} from "../lib/useful";

const Checkout = () => {
    const [paymentComplete, setPaymentComplete] = useState(false)
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState(userStore.getState.phoneNumber)
    const [name, setName] = useState()
    const [email, setEmail] = useState(userStore.getState.email)
    const [orderTotal, setOrderTotal] = useState(cartStore.getState().orderTotal)
    const APIKey = "AIzaSyAstt7FRPLO5z-OWepe3qn0CpoAoVGNSfg"
    console.log(phoneNumber, email, orderTotal)

    useEffect(() => {
        setOrderTotal(cartStore.getState().orderTotal)
    }, [])

    const setInputValue = (property, value) => {
        // string check

        if (property==='name') {
            setName(value)
        }
        else if (property==='email'){
            value = value.trim();
            setEmail(value)
        }
        else if (property==='phoneNumber'){
            setPhoneNumber(value)
        }
        else if (property==='address'){
            setAddress(value)
        }
    }

    const completedPayment = async () => {
        const url = 'http://localhost:8080/order'
        setPaymentComplete(true)
        let itemNums = []
        let cart = cartStore.getState().products
        for (let i =0 ; i < cart.length ; i++){
            itemNums.push(cart[i].itemID)
        }
        const data = {
            userID: userStore.getState().userID,
            address: address,
            products: itemNums.toString()
        }
        const response = await postFetch(url, data).then(resp => resp.json)
        if (response.success) {
            return
        }
    }

    return(
        <div className="container">
            {(paymentComplete) ?
                <div>
                    <h1 style={{color: 'black'}}>Thank you for your payment! Your order is on it's way... Please return to the home page</h1>
                </div>

            :
            <div align='center' className="loginForm">
                <div className="subLoginTitle">Please enter your details</div>
                <InputField
                    type='text'
                    placeholder='Full Name'
                    value={name ? name : ''}
                    onChange={ (value) => setInputValue('name', value) }
                />
                <InputField
                    type='text'
                    placeholder='Email Address'
                    value={email ? email : ''}
                    onChange={ (value) => setInputValue('email', value) }
                />
                <InputField
                    type='text'
                    placeholder='Phone Number'
                    value={phoneNumber ? phoneNumber : ''}
                    onChange={ (value) => setInputValue('phoneNumber', value) }
                />
                <InputField
                    type='text'
                    placeholder='Address'
                    value={address ? address : ''}
                    onChange={ (value) => setInputValue('address', value) }
                />


                <div className="checkoutButtonContainer">
                    <div className="cartTotal">Your cart total is: ${orderTotal}</div>
                </div>
                {(address && phoneNumber && email && name) ? <GooglePay totalPrice={orderTotal} completedPayment={completedPayment} /> : <h2>Please enter ALL fields...</h2>}
            </div>
            }
        </div>

    )



}

export default Checkout