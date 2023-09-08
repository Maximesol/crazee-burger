import { useContext, useState } from 'react';
import styled from 'styled-components';
import AdminContext from "../../../../../contexts/AdminContext.jsx"
import { getinputTextsConfig } from './inputTexts.Config.jsx';
import ImagePreview from './ImagePreview';
import { EMPTY_PRODUCT } from '../../../../../enums/product';
import TextInput from '../../../../reusable-ui/TextInput';
import HintMessage from './HintMessage.jsx';



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

    console.log(isAdmin, productSelected)

    if (isAdmin && !productSelected.title) {
        return <HintMessage />
    }


    return (
        <AddEditStyled>


            {isAdmin && !productSelected.title && <HintMessage />}

            <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />

            <div className='div-input'>

                {inputTexts.map((input => {
                    return (
                        <TextInput
                            key={input.id}
                            {...input}
                            onChange={handlechange}
                            version="minimalist"
                            ref={input.name === "title" ? titleEditRef : null}

                        />
                    )
                }))}


            </div>
        </AddEditStyled>
    )
}

const AddEditStyled = styled.form`

display:grid;
box-sizing: border-box;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4, 1fr);
width: 880px;
height: 160px;
grid-column-gap: 20px;
grid-row-gap: 8px;
padding-left: 70px;
position: absolute;


input{
    background: #F5F5F7;
    border: none;
    width: 100%;
  
}
input::placeholder {
    color: #A7A8AD; 
}

.div-input{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-area: 1 / 2 / 4 / 4;
    gap: 5px;
    max-width: 100%;
    grid-row-gap: 8px;
       
}

.hint-message-icon{
    display: flex;
    align-items: center;
    font-family: Amatic SC;
    font-size: 24px;
    color: #747B91;
    position: relative;
    top:50 px;
}

.hint-message {
    margin-right: 10px;
}

.icon { 
    width: 24px;
    height: 24px;
}
  
`;
