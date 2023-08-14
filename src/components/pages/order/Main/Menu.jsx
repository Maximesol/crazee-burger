import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';

export default function Menu() {
    // state
    const [menu, setMenu] = useState(fakeMenu2)


    //comportement




    // affichage
    return (
        <MenuStyled>
            {menu.map((product) => {
                return <div className='product'>{product.title}</div>
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

  .product{
    
    background:red;
    width: 240px;
    height: 330px;
  }
`;