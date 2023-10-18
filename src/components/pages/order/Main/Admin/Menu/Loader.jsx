import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme/index';
export default function Loader() {
    return (
        <LoaderStyled>
            <span className='title'> Chargement ... </span>
        </LoaderStyled>
    )
}


const LoaderStyled = styled.div`
background-color: ${theme.colors.background_white};
box-shadow: ${theme.shadows.strong};
border-bottom-right-radius: ${theme.borderRadius.extraRound};
display: flex;
justify-content: center;
flex-direction: column;

.title {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
}
  
`;