import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Welcome() {
    return (
        <WelcomeStyled>
            <h1>Bienvenue chez nous !</h1>
            <hr className="separation" />
            <h2>Connectez-vous</h2>
        </WelcomeStyled>
    )
}

const WelcomeStyled = styled.div`

  

h1, h2 {
    ${theme.colors.white};
  }

  h1 {
    color: ${theme.colors.white};
    text-align: center;
    font-family: Amatic SC;
    font-size: ${theme.fonts.P5};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    }
  h2 {
    color: ${theme.colors.white};
    text-align: center;
    font-family: Amatic SC;
    font-size: ${theme.fonts.P4};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    
  }

  .separation {
    width: 400px;
    height: 2px;
    border: 1px solid #F56A2C;
    background: #F56A2C;
  }
`;
