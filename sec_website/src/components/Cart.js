import React, {useEffect, useState} from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { container, checkoutButtonContainer, checkoutButton, cartTotal } from '../App.css'
import ProductPage from './ProductPage';
import {cartStore} from "../lib/cartStore";
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const [shoppingCartTotal, setShoppingCartTotal] = useState()
    const [shoppingCart, setShoppingCart] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        updateTotal()
    }, [shoppingCart])

    const updateTotal = () => {
        setShoppingCart(cartStore.getState().products)
        console.log(shoppingCart)
        let total = 0.0
        for (let i = 0; i < shoppingCart.length; i++) {
            total += parseFloat(shoppingCart[i].itemPrice.slice(1));
        }
        setShoppingCartTotal(total)
    }


    useEffect(() => {
        setShoppingCart(cartStore.getState().products)
        let total = 0.0
        for (let i = 0; i < shoppingCart.length; i++) {
            total += parseFloat(shoppingCart[i].itemPrice.slice(1));
        }
        setShoppingCartTotal(total)

    }, [cartStore()])

    const goToCheckout = () => {
        cartStore.setState({orderTotal: shoppingCartTotal})
        navigate("/checkout")
    }

    return (
        <container>
            <div>
                <h1>Shopping Cart</h1>
            </div>
            {(shoppingCart.length !== 0) ? (
                <div className="cartContainer">
                    {shoppingCart.map((thisProduct, index) => (
                        <CartItem key={index} product={thisProduct}/>))}


                    <div className="checkoutButtonContainer">
                        <div className="cartTotal">Your cart total is: ${shoppingCartTotal}</div>
                        <button className="checkoutButton"
                                disabled={shoppingCart.length === 0}
                                onClick={() => {goToCheckout()}}>
                            Go to checkout!
                        </button>
                    </div>
                </div>

            ) :
                <div>
                    <h3>Your shopping cart is currently empty...</h3>
                </div>
            }

        </container>
    )
}

export default Cart

// export default function addToCart({cart}) {
//     const [cart, setCart] = ([]);
//
//     const [product] = ([
//         {
//
//         }
//     ]);
//
//     const addToCart = (product) => {
//         let newCart = [...cart];
//         let itemInCart = newCart.find(
//           (item) => product.name === item.name
//         );
//         if (itemInCart) {
//           itemInCart.quantity++;
//         } else {
//           itemInCart = {
//             ...product,
//             quantity: 1,
//           };
//           newCart.push(itemInCart);
//         }
//         setCart(newCart);
//       };
//
//       return (
//         <h1>Cart</h1>
//       )
// }
