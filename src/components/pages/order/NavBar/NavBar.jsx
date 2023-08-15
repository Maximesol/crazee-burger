import React from 'react'
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { theme } from '../../../../theme';

export default function NavBar({ username }) {
    return (
        <NavBarStyled>
            <LeftSide />
            <RightSide username={username} />
        </NavBarStyled>
    )
}



const NavBarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 15px 15px 0px 0px;
    align-items:center;
    border-bottom: 1px solid ${theme.colors.greyLight};

    
`;


