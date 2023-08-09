import React from 'react'
import styled from 'styled-components'


export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/public/images/logo-burger.png" />
      <h1>BURGER</h1>

    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display:flex;
  align-items: center;
  transform: scale(2.5);
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width:80px;
    margin: 0 5px;
  }
  h1 {
    display:flex;
    align-items: center;
    color: #FFA01B;
    text-align: center;
    font-family: Amatic SC, cursive;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 1em;
    letter-spacing: 1.5px;
    text-transform: uppercase;

  }
`;

