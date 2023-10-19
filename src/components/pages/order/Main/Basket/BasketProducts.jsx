import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';
import AdminContext from "../../../../../contexts/AdminContext.jsx"
import { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
              classNames={"abricot"}
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
                  className={"pomme"}
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

  .abricot-appear{
    .pomme {
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .abricot-appear-active{
    .pomme {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .abricot-enter{
    .pomme {
      transform: translateX(100px);
    }
  }
  .abricot-enter-active{
    .pomme {
      transition: 0.5s;
      transform: translateX(0px);
    }

  }
  

  .abricot-exit{
    .pomme {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .abricot-exit-active{
    .pomme {
      transform: translateX(-100px);
      transition: 0.5s;
      opacity: 0%;
    }
  }
  


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
