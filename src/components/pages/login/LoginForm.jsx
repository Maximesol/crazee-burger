import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";



export default function LoginForm() {
    // state
    const [name, setName] = useState("");
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`order/${name}`)
        setName("");
    };

    // affichage
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr className="separation" />
            <h2>Connectez-vous</h2>
            <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Entrez votre prénom"
                required
                Icon={<BsPersonCircle className="icon" />}
            />
            <PrimaryButton
                Icon={<IoChevronForward className="chevron-icon" />

                }
                label="Accéder à votre espace"

            />




        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items:center;
  font-family: Amatic SC;

  h1, h2 {
    color: white;
  }

  h1 {
    color: #FFF;
    text-align: center;
    font-family: Amatic SC;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    }

    .chevron-icon {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
}

.icon {
    margin-left: 24px;
    display: flex;
    width: 15px;
    height: 15px;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: #FFF;
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    
  }

  .separation {
    width: 400px;
    height: 2px;
    border: 1px solid #F56A2C;
    background: #F56A2C;
  }

  
`;
