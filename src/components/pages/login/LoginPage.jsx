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
  background: red;
  height: 100vh;
`;