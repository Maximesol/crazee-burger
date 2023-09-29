import React from 'react'
import { useState } from 'react'
import { deepClone } from '../utils/array'

export const useBasket = () => {

    //state 
    const [basket, setBasket] = useState([])

    //comportement

    const handleAddToBasket = (productToAdd) => {

        const existingProductIndex = basket.findIndex((product) => product.id === productToAdd.id);

        let newBasket;

        if (existingProductIndex !== -1) {
            newBasket = deepClone(basket);
            newBasket[existingProductIndex].quantity += 1;
            const [updatedProduct] = newBasket.splice(existingProductIndex, 1);
            newBasket = [updatedProduct, ...newBasket];
        } else {
            newBasket = [{ ...productToAdd, quantity: 1 }, ...basket];
        }

        setBasket(newBasket);
    }



    return { basket, handleAddToBasket }
}
