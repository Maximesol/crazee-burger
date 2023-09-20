import { useContext, useState } from 'react';
import AdminContext from "../../../../../../contexts/AdminContext.jsx"
import { getinputTextsConfig } from './inputTexts.Config.jsx';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import HintMessage from './HintMessage.jsx';
import AddEditInfoMessage from './AddEditInfoMessage.jsx';
import Form from './Form.jsx';



export default function AddEdit() {

    const { productSelected, handleEdit, isAdmin, titleEditRef } = useContext(AdminContext)
    const [productBeinEdited, setProductBeinEdited] = useState(EMPTY_PRODUCT)




    const inputTexts = getinputTextsConfig(productSelected)

    const handlechange = (event) => {
        const { name, value } = event.target

        // Mise à jour basée directement sur 'productSelected' pour garantir que nous travaillons avec 
        // la valeur actuelle et pas une version obsolète. Utiliser 'setProductBeinEdited' directement 
        // ici pourrait conduire à des incohérences dues à la nature asynchrone de 'setState'.
        // erreur : setProductBeinEdited({ ...productSelected, [name]: value })
        const updatedProduct = { ...productSelected, [name]: value }; // bonne valeur !
        setProductBeinEdited(updatedProduct) // cette ligne update le formulaire
        handleEdit(updatedProduct) // cette ligne update le menu
    }



    if (isAdmin && !productSelected.id) {
        return <HintMessage />
    }


    return (
        <Form product={productSelected} onChange={handlechange} ref={titleEditRef}>
            {isAdmin && !productSelected.id && <HintMessage />}
            <AddEditInfoMessage />
        </Form>



    )
}





