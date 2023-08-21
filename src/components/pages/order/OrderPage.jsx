import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import AdminContext from "../../../contexts/AdminContext";


export default function OrderPage() {


    //state
    const [isAdmin, setIsAdmin] = useState(false)
    const [currentTab, setCurrentTab] = useState("add")
    const [isOpen, setIsOpen] = useState(true)


    const adminContextValue = {
        isAdmin,
        setIsAdmin,
        currentTab,
        setCurrentTab,
        isOpen,
        setIsOpen,
    }

    //comportement


    //affichage

    return (
        <AdminContext.Provider value={adminContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <NavBar />
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
