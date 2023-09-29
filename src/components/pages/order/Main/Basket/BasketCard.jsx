import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import { theme } from "../../../../../theme";

export default function BasketCard({ title, price, quantity, imageSource, isAdmin, onDelete }) {
  return (
    <BasketCardStyled isAdmin={isAdmin}>
      <div className="delete-button" onClick={onDelete}>

        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <span className="title">{title}</span>
          <span className="price">{formatPrice(price)}</span>
        </div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  box-sizing: border-box;  
  display: flex;
  align-items: center;
  width: 318px;
  height: 86px;
  padding: 8px 16px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.20);
  overflow: hidden;
  position: relative; /* Ajouté pour le positionnement absolu du bouton de suppression */

  .delete-button {
    display: none;
    position: absolute;
    top: -20px;
    right: 0;
    bottom: 0;
    width: 25%; /* ou spécifiez en px si nécessaire */
    height: 100%;
    background: #E25549;
    color: ${theme.colors.white};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props => props.isAdmin && `
      &:hover {
        display: flex;
      }
    `}
  }

  &:hover {
    .quantity {
      ${props => props.isAdmin && `
        display: none;
      `}
    }
    .delete-button {
      ${props => props.isAdmin && `
        display: flex;
      `}
    }
  }

  .image {
    margin-bottom: 10px;
    
    img {
        width: 70px;
        height: 70px;
        object-fit: contain;
    }
  }

  .text-info {
    width: calc(100% - 86px);
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .left-info {
    display: flex;
    align-items: flex-start;
    margin-left: 10px;
    flex-direction: column;
    gap: 5px;
  }

  .title {
    flex-shrink: 1;
    width: 135px;  
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #17161A;
    font-family: Amatic SC;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  .price {
    margin-top: 5px;
    color: #FFA01B;
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .quantity {
    align-items: center;
    justify-content: flex-start;
    margin-right: 20px;
    margin-top: 30px;
    color: #FFA01B;
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
