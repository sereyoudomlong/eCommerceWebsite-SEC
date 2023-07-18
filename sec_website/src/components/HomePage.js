import React, { Component, useEffect, useState } from 'react';
import { ProductCatalog } from './Catalogue';
import '../App.css'
import { Router } from 'react-router-dom';


const getAllProducts = async() => {
  const url = 'http://localhost:8080/getAllProducts'
  try{
    const response = await fetch(url);
    return await response.json();
  }catch(error) {
      return [];
  }
}


const HomePage = () => {

    const [goods, setGoods] = useState([])

    useEffect( () => {
        getAllProducts()
            .then(json => setGoods(json))
    }, [])

    return (

        <div>
            <h2>Homepage</h2>
            <div>
                <ProductCatalog products={goods} ></ProductCatalog>
            </div>
        </div>


    );

}





export default HomePage;