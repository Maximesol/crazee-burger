import { createContext } from "react";

export default createContext({
    isAdmin: false,
    setIsAdmin: () => { },
    currentTab: "string",
    setCurrentTab: () => { },
    isOpen: false,
    setIsOpen: () => { },
    menu: [],
    handleAdd: () => { },
    handleDelete: () => { },
    resetMenu: () => { },
    newProduct: {},
    setNewProduct: () => { },
    productSelected: {},
    setProductSelected: () => { },
    handleEdit: () => { },
    titleEditRef: {},

})