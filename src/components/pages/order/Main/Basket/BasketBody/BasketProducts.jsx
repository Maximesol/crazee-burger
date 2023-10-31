import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';
import AdminContext from "../../../../../../contexts/AdminContext.jsx"
import { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { basketAnimation } from '../../../../../../theme/animation';


const COMING_SOON = "/public/images/coming-soon.png"


export default function BasketProducts({ basket, isAdmin, handleDeleteBasketProduct }) {

  const { menu, handleProductSelected, productSelected, username } = useContext(AdminContext)

  const handleDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteBasketProduct(id, username)
  }

  const checkIfProductIsClicked = (idProductClicked, idProductSelected) => {
    return idProductClicked === idProductSelected
  }



  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((product) => {
          const menuProduct = menu.find(({ id }) => id === product.id)
          return (
            <CSSTransition
              classNames={"animation-basket"}
              timeout={500}
              key={product.id}
              appear={true}
            >
              <div className='basket-card'>
                <BasketCard
                  {...menuProduct}
                  imageSource={menuProduct.imageSource ? menuProduct.imageSource : COMING_SOON}
                  isClickable={isAdmin}
                  quantity={product.quantity}
                  onDelete={(event) => handleDelete(event, product.id)}
                  onClick={isAdmin ? () => handleProductSelected(product.id) : null}
                  isSelected={checkIfProductIsClicked(product.id, productSelected.id)}
                  className={"card"}
                />
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
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
  ${basketAnimation}
`
