import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { formatPrice } from '../../../../../utils/maths';
import BasketBody from './Body';

export default function Basket() {
    return (
        <BasketStyled>
            <Header amountToPay={formatPrice(10)} />
            <BasketBody />

            <Footer />

        </BasketStyled>
    )
}

const BasketStyled = styled.div`
width: 350px;
display: grid;
grid-template-rows: 50px 1fr 50px;





  
`;
