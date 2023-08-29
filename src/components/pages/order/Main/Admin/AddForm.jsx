import styled from 'styled-components';
import { useContext, useState } from 'react';
import AdminContext from '../../../../../contexts/AdminContext';
import { FiCheck } from 'react-icons/fi'
import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'
import { theme } from '../../../../../theme/index';
import TextInput from '../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../reusable-ui/PrimaryButton';


const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: ""
}

export default function AddForm() {
    // state
    const { handleAdd } = useContext(AdminContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
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
    //affichage

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className='div-image'>
                {newProduct.imageSource ?
                    <img className='preview' src={newProduct.imageSource || ""} alt="Product" /> :
                    <div className='empty-image'>Aucune image</div>}
            </div>
            <div className='div-input'>


                <TextInput
                    name="title"
                    value={newProduct.title}
                    placeholder='Nom du produit (ex: Super Burger)'
                    onChange={handleChange}
                    Icon={<FaHamburger />}
                    version="minimalist" />



                <TextInput
                    name="imageSource"
                    value={newProduct.imageSource}
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-prduit.png)"
                    onChange={handleChange}
                    Icon={<BsFillCameraFill />}
                    version="minimalist"
                />


                <TextInput
                    name="price"
                    value={newProduct.price}
                    placeholder='Prix'
                    onChange={handleChange}
                    Icon={<MdOutlineEuro />}
                    version="minimalist"
                />

            </div>
            <PrimaryButton
                className='button'
                label='Ajouter un nouveau produit au menu'
                version='success' />
            <div className='added-product'>
                {productAdded ?
                    <div>
                        <FiCheck className='fi-check' />
                        <span>Ajouté avec succès !</span>
                    </div> : ""}
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



.fi-check{
    width: 18px;
    height: 18px;
}

.preview {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

.empty-image{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};

}

input{
    background: #F5F5F7;
    border: none;
    width: 100%;
  
}
input::placeholder {
    color: #A7A8AD; 
}

.div-image{
    
    grid-area: 1 / 1 / 4 / 2;
    display:flex;
    justify-content: center;
    align-items:center;
    
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