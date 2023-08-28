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
})