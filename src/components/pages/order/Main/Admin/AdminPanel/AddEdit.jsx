import { useContext, useState } from 'react';
import AdminContext from "../../../../../../contexts/AdminContext.jsx"
import { getinputTextsConfig } from './inputTexts.Config.jsx';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import HintMessage from './HintMessage.jsx';
import AddEditInfoMessage from './AddEditInfoMessage.jsx';
import Form from './Form.jsx';
import SavingMessage from './SavingMessage.jsx';
import { useSuccessMessage } from '../../../../../../hooks/useSuccesMessage';



export default function AddEdit() {

    const { productSelected, handleEdit, isAdmin, titleEditRef, username } = useContext(AdminContext)
    const [productBeinEdited, setProductBeinEdited] = useState(EMPTY_PRODUCT)
    const [valueOnFocus, setValueOnFocus] = useState()
    const { productAdded: isSaved, handleSuccessMessage } = useSuccessMessage()




    const inputTexts = getinputTextsConfig(productSelected)

    const handlechange = (event) => {
        const { name, value } = event.target

        // Mise à jour basée directement sur 'productSelected' pour garantir que nous travaillons avec 
        // la valeur actuelle et pas une version obsolète. Utiliser 'setProductBeinEdited' directement 
        // ici pourrait conduire à des incohérences dues à la nature asynchrone de 'setState'.
        // erreur : setProductBeinEdited({ ...productSelected, [name]: value })
        const updatedProduct = { ...productSelected, [name]: value }; // bonne valeur !
        setProductBeinEdited(updatedProduct) // cette ligne update le formulaire
        handleEdit(updatedProduct, username) // cette ligne update le menu
    }



    if (isAdmin && !productSelected.id) {
        return <HintMessage />
    }

    const handleOnFocus = (event) => {
        const inputvalueOnFocus = event.target.value
        setValueOnFocus(inputvalueOnFocus)
        console.log(inputvalueOnFocus)
    }

    const handleOnBlur = (event) => {
        const valueOnBlur = event.target.value
        if (valueOnFocus !== valueOnBlur) {
            console.log('sa a changé')
            handleSuccessMessage()
        }

    }


    return (
        <Form onFocus={handleOnFocus} onBlur={handleOnBlur} product={productSelected} onChange={handlechange} ref={titleEditRef}>
            {isAdmin && !productSelected.id && <HintMessage />}
            {isSaved ? <SavingMessage /> : <AddEditInfoMessage />}
        </Form>



    )
}





