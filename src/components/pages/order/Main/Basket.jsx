import React from 'react'
import styled from 'styled-components';

export default function Basket() {
    return (
        <BasketStyled>
            <div className='header'>
                <div className='header-text'>
                    <span>TOTAL</span>
                    <span>0,00€</span>

                </div>
            </div>
            <div className='main'>Main</div>

            <div className='footer'>Codé avec ❤️ et React.JS</div>

        </BasketStyled>
    )
}

const BasketStyled = styled.div`
width: 350px;
display: grid;
grid-template-rows: 50px 1fr 50px;


.header{
    heigth: 70px;
    background: #292729;
    display: flex;
    padding: 0px 16px;
    font-family: Amatic SC;
    font-size: 36px;
    letter-spacing: 2px;
    color: #FFA01B;
    
    
    }
.header-text{
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    
    
}
.main{
flex: 1;
background: #F5F5F7;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;
}
.footer{
display: flex;
align-items: center;
justify-content: center;
heigth: 70px;
background: #292729;
color: #FFF;
font-family: Amatic SC;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

  
`;
