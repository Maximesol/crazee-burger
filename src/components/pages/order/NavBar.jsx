import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar({ username }) {
    return (
        <NavBarStyled>
            NavBar
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Deconnexion</button>
            </Link>
        </NavBarStyled>
    )
}



const NavBarStyled = styled.nav`
  background: blue;
    height: 10vh;
`;


