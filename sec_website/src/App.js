import React, {useEffect, useState,} from "react";
import {userContext} from "./lib/contextLib";
import './App.css';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart"
import Contact from "./components/Contact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {userStore} from "./lib/userStore";
import {cartStore} from "./lib/cartStore";
import Checkout from "./components/Checkout";
import {encryptThis, genPrivateKey, getFetch, postFetch} from "./lib/useful";
import {encrypterStore} from "./lib/encrypterStore";
require('dotenv').config()



function App() {
    // ReactSession.setStoreType("sessionStorage")
    //ReactSession.set("")

    const [numInCart, setNumInCart] = useState(0)


    useEffect(() => {
        setNumInCart(cartStore.getState().products.length)
    }, [cartStore()])

    useEffect( () => {
        getKey()
        // getKey().then(key => sendPrivateKey(key))
    }, [])

    async function getKey() {
        const url = "http://localhost:8080/getPublicKey"
        const response = await getFetch(url, {}).then(resp => resp.json())
        encrypterStore.setState({key: response.Key})
        return response.Key
    }
    //
    // async function sendPrivateKey(key) {
    //     const url = "http://localhost:8080/postPrivateKey"
    //     encrypterStore.setState({key: key})
    //     let privateKey = genPrivateKey()
    //     let encPrivateKey1 = encryptThis(privateKey.slice(0, privateKey.length/4 - 1))
    //     let encPrivateKey2 = encryptThis(privateKey.slice(privateKey.length/4, privateKey.length/2 - 1))
    //     let encPrivateKey3 = encryptThis(privateKey.slice(privateKey.length/2, (3*privateKey.length/4)-1))
    //     let encPrivateKey4 = encryptThis(privateKey.slice(3*privateKey.length/4))
    //     console.log(privateKey)
    //     const data = {
    //         key1: encPrivateKey1,
    //         key2: encPrivateKey2,
    //         key3: encPrivateKey3,
    //         key4: encPrivateKey4
    //     }
    //     console.log(data)
    //     const response = await postFetch(url, data).then(resp => resp.json())
    // }



    return (
        <Router>
        <div className="App">

            { userStore(state => state.isLoggedIn) ?
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                        <li><Link to={'/cart'} className="nav-link">Cart</Link></li>
                        <div className="cart">
                            {/* <span><i class="fa fa-shopping-cart"></i></span> ICON NOT WORKING???*/}
                            <span>{numInCart}</span>
                        </div>
                    </ul>

                </nav>

                

                <div>
                    <Routes>
                        <Route exact path='/' element={<HomePage/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout />}/>
                    </Routes>
                </div>

                </div>

            :

                <div className="container-md">
                    <Login/>
                </div>

            }
        </div>
        </Router>
    );

}

export default App;
