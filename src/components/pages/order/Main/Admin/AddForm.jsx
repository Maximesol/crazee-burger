import { useContext, useState } from 'react';
import AdminContext from '../../../../../contexts/AdminContext';
import { EMPTY_PRODUCT } from '../../../../../enums/product';
import Form from './Form'
import PrimaryButton from "../../../../reusable-ui/PrimaryButton"
import SubmitMessage from './SubmitMessage'
import './AddForm.css';




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



    //affichage

    return (



        <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
            <PrimaryButton
                className='button'
                label='Ajouter un nouveau produit au menu'
                version='success' />
            <div className='added-product'>
                {productAdded ?
                    <SubmitMessage />
                    : ""}
            </div>

        </Form>




    )
}



