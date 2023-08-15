import React from 'react'
import styled from 'styled-components';
import Product from './Products';
import { useState } from 'react';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';


export default function Menu() {
  // state

  const [menu, setMenu] = useState(fakeMenu2)

  //comportement


  {

  }

  // affichage
  return (
    <MenuStyled>
      {menu.map((product) => {
        return <Product
          key={product.id}
          title={product.title}
          imageSource={product.imageSource}
          price={product.price}></Product>
      })}

    </MenuStyled>
  )
}


const MenuStyled = styled.div`
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px 150px;
  justify-items: center;
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  
`;