import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';

const COMING_SOON = "/public/images/coming-soon.png"


export default function BasketProducts({ basket }) {
    return (
        <BasketProductsStyled>
            {basket.map((product) => (
                <div className='basket-card'>
                    <BasketCard {...product} imageSource={product.imageSource ? product.imageSource : COMING_SOON} />
                </div>
            ))}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
flex: 1;
display: flex;
flex-direction: column;
overflow-y: scroll ;



.basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
        margin-top: 20px;
    }
    :last-child {
        margin-bottom: 20px;
    }
}

`;
