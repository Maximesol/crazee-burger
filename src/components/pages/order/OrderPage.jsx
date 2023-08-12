import React from "react";
import { useParams, Link } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../../theme";


export default function OrderPage() {


    //state
    const { username } = useParams()
    //comportement


    //affichage

    return (
        <OrderPageStyled>
            <div className="container">
                <nav className="navBar">
                    NavBar
                    <h1>Bonjour {username}</h1>
                    <Link to="/">
                        <button>Deconnexion</button>
                    </Link>
                </nav>
                <div className="main">
                    Main
                </div>
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`

    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    flex-direction: column;

    .container {
    background: red;
    height: 95vh;
    display: flex;
    flex-direction: column;
    }

    .navBar{
        background: blue;
        height: 10vh;

    }
    .main{
        background: green;
        flex:1;
    }
    
`;
