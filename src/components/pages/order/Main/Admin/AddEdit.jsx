
import styled from 'styled-components';
import { HiCursorClick } from "react-icons/hi"


export default function AddEdit() {
    return (
        <AddEditStyled>
            <div className='hint-message-icon'>
                <span className='hint-message'>Cliquer sur un produit du menu pour le modifier</span>
                <HiCursorClick className='icon' />
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
