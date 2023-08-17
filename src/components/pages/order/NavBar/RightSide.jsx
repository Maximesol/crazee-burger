import React from 'react'
import styled from 'styled-components';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import Profile from "./Profile"
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { theme } from '../../../../theme';



export default function RightSide({ username }) {

    //state
    const [isAdmin, setIsAdmin] = useState(false)

    //comportement
    const handleToggle = () => {
        setIsAdmin((prev) => !prev)
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
    }

    //affichage
    return (
        <RightSideStyled >
            <ToastContainer className="toaster" bodyClassName="body-toast" />
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
        .toaster {
        max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
    
`;