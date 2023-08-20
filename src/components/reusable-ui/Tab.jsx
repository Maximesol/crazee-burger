import React from 'react'
import styled from 'styled-components'

export default function Tab({ Icon, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className='icon'>{Icon}</div>
    </TabStyled>
  )
}

const TabStyled = styled.button`
  /* layout */
    
    height: 43px;
    padding: 0 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 5%;
    top: 1px;

    cursor: pointer;

  /* style */
    border-radius: 5px 5px 0px 0px;
    border-top: 1px solid #E4E5E9;
    border-right: 1px solid #E4E5E9;
    border-bottom: 2px solid #E4E5E9;
    border-left: 1px solid #E4E5E9;
    background: #FFF;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);

  /* fonts */
  color: #93A2B1;
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
        border: 2px solid white;  /* Ceci est une suggestion de couleur, vous pouvez la changer selon vos préférences */
    }

  .icon{
    display: flex;
  }
`;
