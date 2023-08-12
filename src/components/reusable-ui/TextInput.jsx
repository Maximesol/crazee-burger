import styled from "styled-components";
import { theme } from "../../theme";




export default function TextInput({ value, onChange, Icon, ...extraProps }) {
    return (
        <InputStyled>
            {Icon}
            <input
                value={value}
                onChange={onChange}
                {...extraProps}

            >

            </input>
        </InputStyled>
    )
}

const InputStyled = styled.div`

    outline: none;
    display: inline-flex;
    justify-content:flex-start;
    align-items: center;
    gap: 12.797px;
    border-radius: 5px;
    background: ${theme.colors.white};
    color: ${theme.colors.greyBlue};
    font-size: 16px;
    width: 400px;
    height: 53px;

    input {
    border: none;
    outline: none;
    background: ${theme.colors.white};
    color: #747B91;
    font-size: 16px;
    

  }

  icon {
    margin-left: 24px;
    display: flex;
    width: 15px;
    height: 15px;
    justify-content: center;
    align-items: center;
  }

 

`;
