import { styled } from "styled-components";
import { HiCursorClick } from 'react-icons/hi'
import { useContext } from "react";
import AdminContext from "../../../../../../contexts/AdminContext";


styled
export default function HintMessage() {
    // state
    const { productSelected } = useContext(AdminContext)

    return (
        <HintMessageStyled >
            <span className='hint-message'>Cliquer sur un produit du menu pour le modifier</span>
            <HiCursorClick className='icon' />
            {productSelected.title}
        </HintMessageStyled>
    )
}

const HintMessageStyled = styled.div`
 
    display: flex;
    align-items: center;
    font-family: Amatic SC;
    font-size: 24px;
    color: #747B91;
    position: relative;
    top:50 px;

.hint-message {
    margin-right: 10px;
}

.icon { 
    width: 24px;
    height: 24px;
}
`;
