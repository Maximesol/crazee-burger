
import styled from 'styled-components';
import { formatPrice } from '../../../../utils/maths';
import PrimaryButton from '../../../reusable-ui/PrimaryButton';
import { theme } from '../../../../theme';



export default function Card({ imageSource, title, price }) {




  return (
    <CardStyled>

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
            <PrimaryButton label="Ajouter" className="button-card" />
          </div>
        </div>

      </div>

    </CardStyled>
  )
}


const CardStyled = styled.div`
  
display: grid;
width: 240px;
height: 330px;
padding: 50px 20px 10px 20px;
grid-template-rows: 65% 1fr;
background: ${theme.colors.white};
box-sizing: border-box;
box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
border-radius: ${theme.borderRadius.extraRound};





.title {
        margin: auto 0;
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


    
  
`;