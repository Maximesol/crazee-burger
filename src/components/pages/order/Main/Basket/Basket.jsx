import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { formatPrice } from '../../../../../utils/maths';
import EmptyBasketBody from './EmptyBasketBody';
import { useContext } from 'react';
import AdminContext from '../../../../../contexts/AdminContext';
import BasketProducts from './BasketProducts';

export default function Basket() {

    // state
    const { basket } = useContext(AdminContext)

    //comportement

    //affichage
    return (
        <BasketStyled>
            <Header amountToPay={formatPrice(10)} />
            {basket.length === 0 ? <EmptyBasketBody /> : <BasketProducts />}

            <Footer />

        </BasketStyled>
    )
}

const BasketStyled = styled.div`
width: 350px;
display: grid;
grid-template-rows: 50px 1fr 50px;





  
`;
