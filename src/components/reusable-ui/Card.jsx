
import styled from 'styled-components';
import { formatPrice } from '../../utils/maths';
import PrimaryButton from './PrimaryButton';
import { theme } from '../../theme';
import { TiDelete } from 'react-icons/ti'
import { css } from 'styled-components';





export default function Card({ imageSource, title, price, onDelete, onClick, isHoverable, hasDeleteButton, isSelected, onAddToBasket }) {
  // state


  // comportements

  // affichage
  return (
    <CardStyled
      isHoverable={isHoverable}
      onClick={onClick}
      isSelected={isSelected}

    >
      {hasDeleteButton && <button className='delete-button' onClick={onDelete}>
        <TiDelete className='icon' />
      </button>}
      <img src={imageSource} className="image" />
      <div className='info'>
        <div className='title'>
          {title}
        </div>
        <div className='description'>
          <div className='price'>
            {formatPrice(price)}
          </div>

          <div className='right-descritption'>
            <PrimaryButton

              label="Ajouter"
              className="button-card"
              onClick={(event) => onAddToBasket(event)} />
          </div>
        </div>

      </div>

    </CardStyled>
  )
}


// previous version :
// const CardStyled = styled.div` : Génère l'erreur suivante: 
// Warning: React does not recognize the `isHoverable` and 'isSelected'prop on a DOM element. 

const CardStyled = styled(({ isHoverable, isSelected, ...rest }) => <div {...rest} />)`



 
display: grid;
width: 240px;
height: 330px;
padding: 50px 20px 10px 20px;
grid-template-rows: 65% 1fr;
background: ${theme.colors.white};
box-sizing: border-box;
box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
border-radius: ${theme.borderRadius.extraRound};
position: relative;

&:hover{
  ${({ isHoverable }) => isHoverable && `
    cursor: pointer;
    width: 252px;
    height: 346.5px;
    box-shadow: 0px 8px 20px 8px rgba(255, 159, 27, 0.3);
    transition: ease-out 0.4s;
  `}
}

.delete-button{
  border: 1px solid red;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #FFA01B;
  z-index: 2;
  padding: 0;
  border: none;
  background: none;
    &:hover {
      color: rgb(204, 71, 61)

    }
}

.icon{
    display: flex;
    width: 30px;
    height: 30px;
  }


.title {
      margin: auto 0;
      padding-bottom: 10px;
      font-size: ${theme.fonts.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;

}

  .info {
    
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;
    
    
  }

  .description {

    display: grid;
    grid-template-columns: 1fr 1fr;
    

}
  .price {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: ${theme.weights.medium};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.primary};

  }
  
  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    
  }
  .right-descritption{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: ${theme.fonts.P1};
  }

  .button-card {
    font-size: ${theme.fonts.XS};
    cursor: pointer;
    padding: 12px;
    width: 95px;
    height: 38px;
  }


  ${({ isHoverable, isSelected }) => isHoverable && isSelected && selectedStyle}

 
`;
const selectedStyle = css`

  background: ${theme.colors.primary};
  .button-card {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  
    .description {
      .price {
        color: ${theme.colors.white};
      }
    }
  
`