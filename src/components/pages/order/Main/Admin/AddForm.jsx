import styled from 'styled-components';
import { useContext, useState } from 'react';
import AdminContext from '../../../../../contexts/AdminContext';
import TextInput from '../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../reusable-ui/PrimaryButton';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getinputTextsConfig } from './inputTexts.Config';
import { EMPTY_PRODUCT } from '../../../../../enums/product';




export default function AddForm() {
    // state
    const { handleAdd } = useContext(AdminContext)
    const { newProduct, setNewProduct } = useContext(AdminContext)
    const [productAdded, setProductAdded] = useState(false)

    // comportements 

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }
        handleAdd(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        setProductAdded(true)
        setTimeout(() => {
            setProductAdded(false)
        }, 2000)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct({ ...newProduct, [name]: value })

    }

    const inputTexts = getinputTextsConfig(newProduct)

    //affichage

    return (

        <AddFormStyled onSubmit={handleSubmit}>

            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />

            <div className='div-input'>

                {inputTexts.map((input => {
                    return (
                        <TextInput
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            version="minimalist"
                        />
                    )
                }))}


            </div>

            <PrimaryButton
                className='button'
                label='Ajouter un nouveau produit au menu'
                version='success' />

            <div className='added-product'>
                {productAdded ?
                    <SubmitMessage />
                    : ""}
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
display:grid;
box-sizing: border-box;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4, 1fr);
width: 880px;
height: 160px;
grid-column-gap: 20px;
grid-row-gap: 8px;
padding-left: 70px;


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
.button{
    
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
    position: relative;
    top: 10px;
}

.added-product {
   
    grid-area: 4 / 2 / 5 / 4;
    width: 50%;
    justify-self: end;
    color: #60BD4F;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    top: 15px;
   
}
  
`;