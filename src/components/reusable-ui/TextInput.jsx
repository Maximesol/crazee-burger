import { styled, css } from "styled-components";
import { theme } from "../../theme";




export default function TextInput({
    value,
    onChange,
    Icon,
    version = "normal",
    ...extraProps }) {
    return (
        <InputStyled
            version={version}>
            {Icon}
            <input
                value={value}
                onChange={onChange}
                version="normal"
                {...extraProps}

            >

            </input>
        </InputStyled>
    )
}

const InputStyled = styled.div`

    
    display: flex;
    align-items: center;
    gap: 12.797px;
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.white};
    color: ${theme.colors.greyBlue};
    font-size: 16px;
    width: 400px;

    input {
    border: none;
    outline: none;
    background: ${theme.colors.white};
    color: #747B91;
    font-size: 16px;
    

  }

  .icon {
    margin-left: 24px;
    display: flex;
    width: 15px;
    height: 15px;
    justify-content: center;
    align-items: center;
  }

  ${'' /* ${(props) => {
        if (props.version === "normal") return extraStyleNormal
        if (props.version === "minimalist") return extraStyleMinimalist

    }} */}

    ${({ version }) => extraStyle[version]}

 

`;
const extraStyleNormal = css`
background-color: ${theme.colors.white};
color: ${theme.colors.greySemiDark};
height: 53px;

input {
    color: ${theme.colors.dark};

    &::placeholder {
        background: ${theme.colors.white};
    }
}
`

const extraStyleMinimalist = css`

background-color: ${theme.colors.background_white};
padding: 8px 16px;
color: ${theme.colors.greyBlue};
width: 100%;

input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
        outline: 0;
    }
}

`
const extraStyle = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist
}
