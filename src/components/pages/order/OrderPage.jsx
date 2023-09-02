import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import AdminContext from "../../../contexts/AdminContext";
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../../../enums/product";


export default function OrderPage() {


    //state
    const [isAdmin, setIsAdmin] = useState(false)
    const [currentTab, setCurrentTab] = useState("add")
    const [isOpen, setIsOpen] = useState(true)
    const [menu, setMenu] = useState(fakeMenu2)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)



    const handleAdd = (newProduct) => {
        //1 copie du state

        //const menuCopy = [...menu] (manière moyenne)
        const menuCopy = JSON.parse(JSON.stringify(menu)) //manière la plus sure de deep clone un objet

        //2 manipuler la copie du state
        const menuCopyUpdated = [newProduct, ...menuCopy]

        // setteur

        setMenu(menuCopyUpdated)
    }

    const handleEdit = (productBeingEdited) => {

        const menuCopy = JSON.parse(JSON.stringify(menu))

        const menuCopyUpdated = menuCopy.map((product) => {
            if (product.id === productBeingEdited.id) {
                return productBeingEdited
            } else {
                return product
            }
        })

        setMenu(menuCopyUpdated)
        setProductSelected(productBeingEdited);
    }

    const handleDelete = (productToDelete) => {

        const menuCopy = [...menu]

        const menuCopyUpdated = menuCopy.filter(product => product.id !== productToDelete)

        setMenu(menuCopyUpdated)

    }

    const resetMenu = () => {
        setMenu(fakeMenu2)
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
