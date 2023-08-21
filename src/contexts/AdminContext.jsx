import { createContext } from "react";

export default createContext({
    isAdmin: false,
    setIsAdmin: () => { },
    isAddSelected: false,
    setIsAddSelected: () => { },
    isEditSelected: false,
    setIsEditSelected: () => { },
    currentTab: "string",
    setCurrentTab: () => { },
    isOpen: false,
    setIsOpen: () => { },
})