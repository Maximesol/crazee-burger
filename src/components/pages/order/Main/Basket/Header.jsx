import React from 'react'
import { styled } from 'styled-components';

export default function Header({ amountToPay }) {
    return (
        <HeaderStyled >
            <div className='header-text'>
                <span>TOTAL</span>
                <span>{amountToPay}</span>

            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`

    heigth: 70px;
    background: #292729;
    display: flex;
    padding: 0px 16px;
    font-family: Amatic SC;
    font-size: 36px;
    letter-spacing: 2px;
    color: #FFA01B;
    
    .header-text{
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    
    
}
    
    
  
`;