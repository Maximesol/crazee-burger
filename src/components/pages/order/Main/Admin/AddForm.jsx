import styled from 'styled-components';
export default function AddForm() {
    return (
        <AddFormStyled>
            <div className='div-image'>

            </div>
            <div className='div-input'>
                <input placeholder='Nom du produit (ex: Super Burger)' />
                <input placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-prduit.png)" />
                <input placeholder='Prix' />
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
}
.button{
    border:5px solid green;
    grid-area: 4 / 2 / 5 / 3;
}
  
`;