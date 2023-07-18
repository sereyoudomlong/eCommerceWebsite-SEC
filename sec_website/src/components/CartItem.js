import React, {useEffect, useState} from "react";
import { Link, Route, Routes } from 'react-router-dom';
import '../App.css'
import ProductPage from './ProductPage';
import {cartStore} from "../lib/cartStore";
import './cartStyle.css'


const CartItem = ({product}) => {

    const [cartTotal, setCartTotal] = useState(0.00)

    const removeProduct = () => {
        let cart = cartStore.getState().products
        const index = cart.indexOf(product);
        if (index > -1) { // only splice array when item is found
            cart.splice(index, 1);
        }
        cartStore.setState({products: cart})
        console.log(cartStore.getState().products)
    }



    return (
        <div className="cartItemContainer">
            <div className="cartItemTextContainer">
                <h3>
                    {product.itemName}
                </h3>
                <h4 className="priceText">
                    Price: {product.itemPrice}
                </h4>
                <button
                    onClick={() => {removeProduct()}}
                    className="_removeButton_kgv6c_177">
                    Remove
                </button>
            </div>
            <div className="cartImage">
                <img src={product.href} alt="Placeholder image"></img>
            </div>
        </div>
    )
}

export default CartItem