import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  )
}

const EditInfoMessageStyled = styled.span`
  grid-area: 4 /2 / 5 / 3;
  padding-top: 10px;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.S};
  .live-update {
    text-decoration: underline;
  }
`