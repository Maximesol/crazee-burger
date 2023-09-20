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

export default function Basket() {

    // state
    const { basket, isAdmin } = useContext(AdminContext)

    //comportement

    //affichage
    return (
        <BasketStyled>
            <Header amountToPay={formatPrice(10)} />
            {basket.length === 0 ? <EmptyBasketBody /> : <BasketProducts basket={basket} />}

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

  
`
