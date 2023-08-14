import React from 'react'
import styled from 'styled-components';

export default function Card() {
    return (
        <ProductStyled>Product
            <img />
            <div>

            </div>
        </ProductStyled>
    )
}


const CardStyled = styled.div`
  border: 2px solid green;
  display: grid;
  width: 240px;
  height: 330px;
  padding: 16px;
`;