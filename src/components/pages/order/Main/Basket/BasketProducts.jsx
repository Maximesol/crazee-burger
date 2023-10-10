import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';

const COMING_SOON = "/public/images/coming-soon.png"


export default function BasketProducts({ basket, isAdmin, handleDeleteBasketProduct }) {

  const handleDelete = (id) => {
    handleDeleteBasketProduct(id)
  }

  return (
    <BasketProductsStyled>
      {basket.map((product) => (
        <div className='basket-card' key={product.id}>
          <BasketCard
            {...product}
            imageSource={product.imageSource ? product.imageSource : COMING_SOON}
            isClickable={isAdmin}
            onDelete={() => handleDelete(product.id)} />
        </div>
      ))}
    </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`
