import React from 'react'
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function NavBar({ username }) {
    return (
        <NavBarStyled>
            <LeftSide />
            <RightSide username={username} />
        </NavBarStyled>
    )
}



const NavBarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    
`;


