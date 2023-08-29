import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme/index'
import { FiCheck } from 'react-icons/fi'

export default function SubmitMessage() {
    return (
        <SubmitMessageStyled className='submit-message'>
            <FiCheck className='icon' />
            <span className='message'>Ajouté avec succès !</span>
        </SubmitMessageStyled>
    )
}
const SubmitMessageStyled = styled.div`
  .submit-message{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
}

.icon{
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
}

.message {
    margin-left: 5px;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.success};
}
`;
