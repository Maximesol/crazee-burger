import { useContext } from 'react';
import styled from 'styled-components';
import AdminContext from "../../../../../../contexts/AdminContext.jsx"
import AddEdit from './AddEdit.jsx';
import AddForm from './AddForm.jsx';

export default function AdminPanel() {
    //state
    const { currentTab } = useContext(AdminContext)

    //comportements

    //Affichage
    return (
        <AdminPanelStyled>
            {currentTab === "add" && <AddForm />}
            {currentTab === "edit" && <AddEdit />}

        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    box-sizing: border-box;
    height: 250px;
    border: 1px solid #E4E5E9;
    background: #FFF;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
    padding: 30px 10px;
`;
