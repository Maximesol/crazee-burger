import styled from "styled-components";


export default function PrimaryButton({ Icon, label }) {
    return (
        <ButtonStyled>
            <span>{label}</span>
            {Icon && Icon}

        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`


    

    display: flex;
    width: 400px;
    height: 53px;
    padding: 18px 106.203px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    gap: 9.8px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #FF9F1B;
    background: #FF9F1B;
    margin-top: 18px;
    color: #FFF;
    text-align: center;
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 100% */
    

    &:hover {
        background: #FFF;
        color: #FF9F1B; /* Changer la couleur du texte si nécessaire */
    }

  
`;
