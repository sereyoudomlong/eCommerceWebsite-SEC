// Create product cards and its containers

import React, {useEffect, useState} from 'react';
import { cartStore } from "../lib/cartStore";
import { Link, Route, Routes } from 'react-router-dom';
import '../App.css'
import ProductPage from './ProductPage';
import addToCart from './Cart.js'
import {userStore} from "../lib/userStore";


const ProductCatalog = ( {products} ) => {

    // Creates a ProductTile object to be rendered
    const renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    // Iterates through the product list and calls the renderTile
    // method to create the ProductTile object

    let tiles = [];
    for (let i = 0; i < products.length; i++) {
        const current_item = products[i];
        tiles.push(renderTile(current_item));
    }
    // console.log(tiles);
    return (
        <div className="container">
            <div className="columns mt-5 is-5 is-multiline is-variable">
                {products.map( (product, index) => (
                    <ProductTile key={index} product={product} />
                ))}
            </div>
        </div>
    )

}

// ProductTile: A Bulma box containing information about a specific product
const ProductTile = ({product}) => {

    const [added, setAdded] = useState(false)

    useEffect( () => {
        let currentCart = cartStore.getState().products
        if (currentCart.includes(product)) {
            setAdded(true)
        }
    }, [])

    const trunc = product.itemDescription.substr(0, 50) + "\u2026";
    // // Renders the ProductTile with Product Information
    // render() {
    const addToCart = () => {
        let cart = cartStore.getState().products
        console.log(cart)
        cart.push(product)
        cartStore.setState({products: cart})
        console.log(cartStore.getState())
        setAdded(true)
    }
        return (
            <div class="column is-3">
                <div class="card">
                    <div class="card-image has-text-centered px-6">
                        <img src={product.href} alt="Placeholder image"></img>
                    </div>
                    <div class="card-content">
                        {/* link to product page when user click on title of a product and passing state */}
                        <Link to={"/product"} state={product} className="title is-size-5">{product.itemName}</Link>
                        <p id="price">{product.itemPrice}</p> <br></br>
                        <div class="content is-size-6">
                            {trunc}
                            <br></br>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
                            <button
                                disabled={added}
                                onClick={() => {addToCart(product)}}>
                                {added? "IN CART" : "ADD TO CART"}
                            </button>
                        </p>
                    </footer>
                </div>
            </div>
        )

}

export {ProductTile, ProductCatalog, };