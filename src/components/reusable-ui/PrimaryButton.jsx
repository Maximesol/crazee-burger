import styled from "styled-components";
import { theme } from '../../theme/index';
import { css } from "styled-components";


export default function PrimaryButton({
    Icon,
    label,
    className,
    version = 'default',
    onClick
}) {
    return (
        <ButtonStyled className={className} version={version} onClick={onClick}>
            <span>{label}</span>
            {Icon && Icon}

        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    ${(props) => props.version === 'default' && extraStyleDefault}
    ${(props) => props.version === 'success' && extraStyleSuccess}


    

  
`;

const extraStyleDefault = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid #FF9F1B;
    background: #FF9F1B;
    color: ${theme.colors.white};
    text-align: center;
    font-family: Arial;
    font-size: ${theme.fonts.P0};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    

    &:hover {
        background: ${theme.colors.white};
        color: #FF9F1B; 
    }
`

const extraStyleSuccess = css`
    cursor: pointer;
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    height: 35px;
    font-weight: ${theme.weights.semiBold};
    :hover {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
    :active {
        color: ${theme.colors.white};
        background: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
`
