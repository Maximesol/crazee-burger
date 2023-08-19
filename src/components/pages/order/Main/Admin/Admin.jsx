import styled from "styled-components"


export default function Admin() {
    return (
        <AdminStyled>
            Admin
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
        
        height: 250px;
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        border: 1px solid #E4E5E9;
        background: #FFF;
        box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
`;
