import styled from "styled-components"
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from 'react';

export default function Admin() {

    //state
    const [isCollapse, setIsCollapse] = useState(true)

    //comportement

    //affichage
    return (
        <AdminStyled>
            <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
            {isCollapse && <AdminPanel />}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
        
        
        position: absolute;
        bottom:0;
        left:0;
        right:0;

`;
