import styled from 'styled-components';
import { useContext, useState } from 'react';
import AdminContext from '../../../../../contexts/AdminContext';


const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

export default function AddForm() {
    // state
    const { handleAdd } = useContext(AdminContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)


    // comportements 

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }
        handleAdd(newProductToAdd)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct({ ...newProduct, [name]: value })

    }
    //affichage

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className='div-image'>

            </div>
            <div className='div-input'>
                <div className="input-nom">

                    <input name="title" value={newProduct.title} placeholder='Nom du produit (ex: Super Burger)' onChange={handleChange} />
                </div>

                <div className="input-lien">
                    <input name="imageSource" value={newProduct.imageSource} placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-prduit.png)" onChange={handleChange} />
                </div>
                <div className="input-prix">
                    <input name="price" value={newProduct.price} placeholder='Prix' onChange={handleChange} />
                </div>
            </div>
            <button className='button'>Ajouter un nouveau produit au menu</button>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
display:grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4, 1fr);
height: 100%;
width: 70%;

.input-nom, .input-lien, .input-prix {
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    background: #F5F5F7;
}

input{
    background: #F5F5F7;
    border: none;
    border-radius: 5px;
    width: 100%;
    
}
input::placeholder {
    color: #A7A8AD; 
}

.div-image{
    border: 5px solid black;
    grid-area: 1 / 1 / 4 / 2;
}
.div-input{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    border: 5px solid red;
    grid-area: 1 / 2 / 4 / 4;
    padding: 0 16px;
    gap: 13px;
    
}
.button{
    border:5px solid green;
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
}
  
`;