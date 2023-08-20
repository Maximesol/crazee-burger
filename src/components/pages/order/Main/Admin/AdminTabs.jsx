import React from 'react'
import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi"
import Tab from '../../../../reusable-ui/Tab';

export default function AdminTabs({ isCollapse, setIsCollapse }) {
    //state

    //comportement


    //affichage
    return (
        <AdminTabsStyled>
            <Tab Icon={<FiChevronDown />} onClick={() => setIsCollapse(!isCollapse)} />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
  
  display: flex;
  padding: 0 20px;
`;