import React from 'react'
import styled from 'styled-components';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import Profile from "./Profile"
import { useContext } from 'react';
import { toast } from "react-toastify"
import ToastAdmin from './ToastAdmin';
import AdminContext from '../../../../contexts/AdminContext';




export default function RightSide({ username }) {

    //state
    const { isAdmin, setIsAdmin } = useContext(AdminContext)

    //comportement
    const handleToggle = () => {

        if (!isAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsAdmin((prev) => !prev)
    }

    //affichage
    return (
        <RightSideStyled >
            <ToastAdmin />
            <ToggleButton
                isChecked={isAdmin}
                onToggle={handleToggle}
                labelIfChecked="DÉSACTIVER LE MODE ADMIN"
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
            />
            <Profile username={username} />
        </RightSideStyled>
    )
}


const RightSideStyled = styled.div`
  
        display: flex;
        align-items: center;
        padding-right: 50px;      
    
`;