import React from 'react'
import { styled } from 'styled-components';

export default function Footer() {
    return (
        <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>
    )
}


const FooterStyled = styled.div`
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
  
`;