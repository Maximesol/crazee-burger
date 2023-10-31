import React from 'react'
import EmptyBasketBody from './EmptyBasketBody';
import BasketProducts from './BasketProducts';
import AdminContext from '../../../../../../contexts/AdminContext';
import { useContext } from 'react';



export default function BasketBody() {
    const { basket, isAdmin, handleDeleteBasketProduct } = useContext(AdminContext)

    return (
        <>{basket.length === 0 ? <EmptyBasketBody /> : <BasketProducts
            basket={basket}
            isAdmin={isAdmin}
            handleDeleteBasketProduct={handleDeleteBasketProduct} />}</>
    )
}
