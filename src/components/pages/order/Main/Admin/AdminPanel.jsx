import { useContext } from 'react';
import styled from 'styled-components';
import AdminContext from "../../../../../contexts/AdminContext.jsx"

export default function AdminPanel() {
    //state
    const { isAddSelected, isEditSelected } = useContext(AdminContext)

    //comportements

    //Affichage
    return (
        <AdminPanelStyled>
            {isAddSelected && "Ajouter un produit"}
            {isEditSelected && "Modifier un produit"}

        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    border: 1px solid #E4E5E9;
    background: #FFF;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
`;
