import { useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array";
import { syncBothMenus } from '../api/product';



export const useMenu = (setProductSelected) => {
    //state 
    const [menu, setMenu] = useState()


    //comportements et gestionnaire d'état :
    const handleAdd = (newProduct, username) => {
        //1 copie du state

        //const menuCopy = [...menu] (manière moyenne)
        const menuCopy = deepClone(menu) //manière la plus sure de deep clone un objet

        //2 manipuler la copie du state
        const menuCopyUpdated = [newProduct, ...menuCopy]

        // setteur

        setMenu(menuCopyUpdated)
        syncBothMenus(username, menuCopyUpdated)
    }

    const handleEdit = (productBeingEdited) => {

        const menuCopy = deepClone(menu)

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
    const handleDelete = (productToDelete, username) => {

        const menuCopy = [...menu]

        const menuCopyUpdated = menuCopy.filter(product => product.id !== productToDelete)

        setMenu(menuCopyUpdated)
        syncBothMenus(username, menuCopyUpdated)

    }
    const resetMenu = () => {
        setMenu(fakeMenu2)
    }



    return { menu, setMenu, resetMenu, handleDelete, handleEdit, handleAdd }

}