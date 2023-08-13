import React from 'react'
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';
import { refreshPage } from '../../../utils/window'


export default function LeftSide() {
    return (
        <LeftSideStyled>
            <Logo className="logo-order-page" onClick={refreshPage} />
        </LeftSideStyled>
    )
}


const LeftSideStyled = styled.div`
  

  .logo-order-page {
    cursor: pointer;
  }
    
    
`;