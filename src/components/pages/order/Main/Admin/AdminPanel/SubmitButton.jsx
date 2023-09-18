import React from 'react'
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton'
import SubmitMessage from './SubmitMessage';

export default function SubmitButton({ productAdded }) {


    return (
        <>
            <PrimaryButton
                className='button'
                label='Ajouter un nouveau produit au menu'
                version='success' />
            <div className='added-product'>
                {productAdded ?
                    <SubmitMessage />
                    : ""}
            </div>
        </>
    )
}

