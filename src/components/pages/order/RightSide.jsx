import React from 'react'
import styled from 'styled-components';
import Profile from "./Profile"



export default function RightSide({ username }) {
    return (
        <RightSideStyled>
            <Profile />
        </RightSideStyled>
    )
}


const RightSideStyled = styled.div`
  
        display: flex;
        align-items: center;
        padding-right: 50px;
    
`;