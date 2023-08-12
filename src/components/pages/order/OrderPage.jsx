import React from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";
import NavBar from "./NavBar";


export default function OrderPage() {


    //state
    const { username } = useParams()
    //comportement


    //affichage

    return (
        <OrderPageStyled>
            <div className="container">
                <NavBar username={username} />
                <Main />

            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`

    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
    
    height: 95vh;
    display: flex;
    flex-direction: column;
    width:1400px;
    
}
    
    
`;
