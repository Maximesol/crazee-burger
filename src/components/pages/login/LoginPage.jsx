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
      <Logo scale={2.5} />
      <LoginForm />
    </LoginPageStyled>)
}




const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("images/F03 burger-background.jpg");
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
`;