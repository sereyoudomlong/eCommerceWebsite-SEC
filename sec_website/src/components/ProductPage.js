import React from 'react';
import {Link, useLocation, useParams, userLocation} from 'react-router-dom';

function ProductPage(){

    // getting state that was pass
    const location = useLocation()
    const { goods } = location.state

    return(
        <section class="section">
            <div class="container">
                <div class="columns is-variable is-multiline is-centered">
                    {/* render the passed state in */}
                    <div class="column is-8 has-text-black">
                        <img src={goods.href} alt="Placeholder image"></img>
                    </div>
                    <div class="column has-text-black has-text-left">
                        <p class="title is-size-1">{goods.itemName}</p>
                        <p class="title is-2">{goods.itemPrice}</p>
                        <p class="is-size-5 is-italic">+ Free Shipping</p>
                        <br></br>
                        <br></br>
                        <p class="is-size-3">Quantity:</p>
                        <input type="number" id="quantity" name="quantity" min="1"/>
                        <br></br>
                        <br></br>
                        <button class="button is-medium is-fullwidth is-dark is-outlined">Add to Cart</button>
                    </div>
                    <div class="column is-full is-centered has-text-black has-text-left ">
                        <p class="title is-size-4">Description</p>
                        <p class="is-size-6">{goods.itemDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage;