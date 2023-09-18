import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { formatPrice } from '../../../../../utils/maths';

export default function Basket() {
    return (
        <BasketStyled>
            <Header children={formatPrice(10)} />
            <div className='main'>Main</div>

            <Footer />

        </BasketStyled>
    )
}

const BasketStyled = styled.div`
width: 350px;
display: grid;
grid-template-rows: 50px 1fr 50px;


.main{
flex: 1;
background: #F5F5F7;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;
}


  
`;
