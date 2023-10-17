import React from 'react'
import { BsCloudCheck } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from '../../../../../../theme/index';


export default function SavingMessage() {
    return (
        <SavingMessageStyled>
            <div className='icon'>
                <BsCloudCheck />
            </div>
            <span className='sentence'>Modifications enregistrées</span>

        </SavingMessageStyled>
    )
}

const SavingMessageStyled = styled.div`
grid-area: 4 /2 / 5 / 3;
padding-top: 10px;
color: ${theme.colors.blue};
font-size: ${theme.fonts.P0};
display: flex;
align-items: center;

.icon{
    font-size: ${theme.fonts.P2};
    margin: 0 10px;
    margin-top: 2px;
    align-self: center;
}
  
`;
