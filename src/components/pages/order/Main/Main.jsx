import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Card from './Card';

export default function Main() {
    return (
        <MainStyled>
            <div className='menu'>
                MENU
            </div>
            <div className='basket'>BASKET</div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex:1;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;
    display: grid;
    grid-template-columns: 20% 1fr;
    
    

    .menu{
        background: pink;
        
        
    }
    .basket{
        background: purple;
    }
`;
