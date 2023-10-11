import { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import AdminContext from "../../../contexts/AdminContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from '../../../hooks/useMenu';
import { useBasket } from '../../../hooks/useBasket';


export default function OrderPage() {


    //state
    const [isAdmin, setIsAdmin] = useState(false)
    const [currentTab, setCurrentTab] = useState("add")
    const [isOpen, setIsOpen] = useState(true)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const { menu, resetMenu, handleDelete, handleEdit, handleAdd } = useMenu(setProductSelected)
    const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()


    const handleProductSelected = async (idProductClicked) => {
        const productClickOn = menu.find(({ id }) => id === idProductClicked)
        await setIsOpen(true)
        await setCurrentTab("edit")
        await setProductSelected(productClickOn)
        titleEditRef.current.focus()
    }








    const adminContextValue = {
        isAdmin,
        setIsAdmin,
        currentTab,
        setCurrentTab,
        isOpen,
        setIsOpen,
        menu,
        handleAdd,
        handleDelete,
        resetMenu,
        newProduct,
        setNewProduct,
        productSelected,
        setProductSelected,
        handleEdit,
        titleEditRef,
        basket,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected

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
