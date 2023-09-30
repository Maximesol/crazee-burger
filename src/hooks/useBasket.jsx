import { useState } from 'react'
import { deepClone } from '../utils/array'
import { fakeBasket } from '../fakeData/fakeBasket'

export const useBasket = () => {

    //state 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    //comportement

    const handleAddToBasket = (productToAdd) => {

        const existingProductIndex = basket.findIndex((product) => product.id === productToAdd.id);

        let newBasket;

        // If product already exists in basket, update quantity
        if (existingProductIndex !== -1) {
            newBasket = deepClone(basket);
            newBasket[existingProductIndex].quantity += 1;
            const [updatedProduct] = newBasket.splice(existingProductIndex, 1);
            newBasket = [updatedProduct, ...newBasket];
        }
        // Else add product to basket
        else {
            newBasket = [{ ...productToAdd, quantity: 1 }, ...basket];
        }

        setBasket(newBasket);
    }

    const handleDeleteBasketProduct = (idBasketProduct) => {
        //1. copy du state (optional because filter returns a new array )
        const basketCopy = deepClone(basket)

        //2. manip de la copie state
        const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
        //const basketUpdated = filter(idBasketProduct, basketCopy)

        //3. update du state
        setBasket(basketUpdated)
    }



    return { basket, handleDeleteBasketProduct, handleAddToBasket }
}
