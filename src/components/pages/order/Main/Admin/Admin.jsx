import styled from "styled-components"
import AdminTabs from "./AdminPanel/AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from 'react';
import AdminContext from "../../../../../contexts/AdminContext";
import { fadeInFromBottom } from "../../../../../theme/animation";

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

animation: ${fadeInFromBottom} ease-out 500ms;

`;
