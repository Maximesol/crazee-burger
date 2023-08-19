import React from 'react'
import styled from 'styled-components';

export default function AdminPanel() {
    return (
        <AdminPanelStyled>
            AdminPanel
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    border: 1px solid #E4E5E9;
    background: #FFF;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
`;
