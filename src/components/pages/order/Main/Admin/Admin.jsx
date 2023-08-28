import styled from "styled-components"
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useContext } from 'react';
import AdminContext from "../../../../../contexts/AdminContext";

export default function Admin() {

    //state 
    const { isOpen } = useContext(AdminContext)

    //comportement

    //affichage
    return (
        <AdminStyled>
            <AdminTabs />
            {isOpen && <AdminPanel />}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
        
        
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        z-index: 2;

`;
