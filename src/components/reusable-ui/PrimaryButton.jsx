import styled from "styled-components";
import { theme } from "../../theme";


export default function PrimaryButton({ Icon, label, className, onClick }) {
    return (
        <ButtonStyled className={className} onClick={onClick}>
            <span>{label}</span>
            {Icon && Icon}

        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`

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
        color: #FF9F1B; /* Changer la couleur du texte si nécessaire */
    }

  
`;
