import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { formatPrice } from '../../../../../utils/maths';
import EmptyBasketBody from './EmptyBasketBody';
import { useContext } from 'react';
import AdminContext from '../../../../../contexts/AdminContext';
import BasketProducts from './BasketProducts';
import { theme } from '../../../../../theme';
import Loader from '../Admin/Menu/Loader';

export default function Basket() {

  // state
  const { basket, isAdmin, handleDeleteBasketProduct, menu } = useContext(AdminContext)


  //comportement
  if (menu === undefined) return <Loader />

  const totalToPay = basket.reduce((total, basketProduct) => {
    const menuProduct = menu.find(({ id }) => id === basketProduct.id)
    if (isNaN(basketProduct.price)) return total

    return total + (menuProduct.price * basketProduct.quantity)

  }, 0)


  //affichage
  return (
    <BasketStyled>
      <Header amountToPay={formatPrice(totalToPay)} />
      {basket.length === 0 ? <EmptyBasketBody /> : <BasketProducts
        basket={basket}
        isAdmin={isAdmin}
        handleDeleteBasketProduct={handleDeleteBasketProduct} />}

      <Footer />

    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`
