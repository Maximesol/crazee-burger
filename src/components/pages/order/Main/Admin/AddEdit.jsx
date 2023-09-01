import { useContext } from 'react';
import styled from 'styled-components';
import { HiCursorClick } from "react-icons/hi"
import AdminContext from "../../../../../contexts/AdminContext.jsx"


export default function AddEdit() {

    const { productSelected } = useContext(AdminContext)

    return (
        <AddEditStyled>
            <div className='hint-message-icon'>
                <span className='hint-message'>Cliquer sur un produit du menu pour le modifier</span>
                <HiCursorClick className='icon' />
                {productSelected.title}
            </div>
        </AddEditStyled>
    )
}

const AddEditStyled = styled.form`

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
