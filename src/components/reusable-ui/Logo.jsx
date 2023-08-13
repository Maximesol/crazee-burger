import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme';


export default function Logo({ scale = 1, onClick, className }) {
  return (
    <LogoStyled scale={scale} onClick={onClick} className={className}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-burger.png" />
      <h1>BURGER</h1>

    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display:flex;
  align-items: center;
  transform: scale(${props => props.scale});
  font-family: 'Amatic SC', cursive, sans-serif;

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width:80px;
    margin: 0 5px;
  }
  h1 {
    display:inline;
    align-items: center;
    color: ${theme.colors.primary};
    text-align: center;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    line-height: 1em;
    letter-spacing: 1.5px;
    text-transform: uppercase;

  }
`;

