import React from 'react'
import styled from 'styled-components';

export default function BasketBody() {
    return (
        <BasketBodyStyled>
            <span>Votre commande est vide.</span>
        </BasketBodyStyled>
    )
}

const BasketBodyStyled = styled.div`
flex: 1;
background: #F5F5F7;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;
display: flex;
justify-content: center;
align-items: center;

span{
color: #747B91;
text-align: center;
font-family: Amatic SC;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: 72px; /* 200% */
}
  
`;
