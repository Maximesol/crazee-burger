import React from "react"
import LoginForm from "./LoginForm"
import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"

export default function LoginPage() {
  //state

  // comportement

  // affichage

  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>)
}


const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  height: 100vh;

  ::before {
    content: "";
    position: absolute; // Positionnement absolu pour couvrir tout le conteneur
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/images/F03 burger-background.jpg");
    background-size: cover;
    background-position: center;
    
    
    z-index: -1; // Mettre en arrière-plan
  }

`;