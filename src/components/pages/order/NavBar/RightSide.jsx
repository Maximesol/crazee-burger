import React from 'react'
import styled from 'styled-components';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import Profile from "./Profile"



export default function RightSide({ username }) {

    //state

    //comportement

    //affichage
    return (
        <RightSideStyled >
            <ToggleButton
                labelIfChecked="DÉSACTIVER LE MODE ADMIN"
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
            />
            <Profile username={username} />
        </RightSideStyled>
    )
}


const RightSideStyled = styled.div`
  
        display: flex;
        align-items: center;
        padding-right: 50px;
    
`;