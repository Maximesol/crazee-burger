import styled from 'styled-components'
import TextInput from '../../../../reusable-ui/TextInput'
import ImagePreview from './ImagePreview'
import { getinputTextsConfig } from './inputTexts.Config'
import React from 'react'



const Form = React.forwardRef(({ onSubmit, onChange, product, children }, ref) => {

    // state

    // comportements 





    const inputTexts = getinputTextsConfig(product)


    return (
        <FormStyled onSubmit={onSubmit}>

            <ImagePreview imageSource={product.imageSource} title={product.title} />

            <div className='div-input'>

                {inputTexts.map((input => {
                    return (
                        <TextInput
                            key={input.id}
                            {...input}
                            onChange={onChange}
                            version="minimalist"
                            ref={ref && input.name === 'title' ? ref : null}
                        />
                    )
                }))}


            </div>
            {children} {/* le bouton d'ajout */}

        </FormStyled>
    )
})
export default Form


const FormStyled = styled.form`

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

  
`;