import { useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import AdminContext from "../../../contexts/AdminContext";


export default function OrderPage() {


    //state
    const { username } = useParams()
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAddSelected, setIsAddSelected] = useState(true)
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [currentTab, setCurrentTab] = useState("add")


    const adminContextValue = {
        isAdmin,
        setIsAdmin,
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected,
        currentTab,
        setCurrentTab,
    }

    //comportement


    //affichage

    return (
        <AdminContext.Provider value={adminContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <NavBar username={username} />
                    <Main />
                </div>
            </OrderPageStyled>
        </AdminContext.Provider>
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
    border-radius: ${theme.borderRadius.extraRound}
    
}
    
    
`;
