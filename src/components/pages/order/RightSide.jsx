import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function RightSide({ username }) {
    return (
        <RightSideStyled>
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Deconnexion</button>
            </Link>
        </RightSideStyled>
    )
}


const RightSideStyled = styled.div`
  
        background: purple;
    
`;