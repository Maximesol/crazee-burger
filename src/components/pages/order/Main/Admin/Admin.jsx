import styled from "styled-components"
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from 'react';

export default function Admin() {

    //state 
    const [isOpen, setIsOpen] = useState(true)

    //comportement

    //affichage
    return (
        <AdminStyled>
            <AdminTabs isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <AdminPanel />}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
        
        
        position: absolute;
        bottom:0;
        left:0;
        right:0;

`;
