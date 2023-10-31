import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { authenticateUser } from '../../../api/user';
import Welcome from "./Welcome";



export default function LoginForm() {
  // state
  const [name, setName] = useState("");
  const navigate = useNavigate()

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();
    await authenticateUser(name);
    navigate(`order/${name}`)
    setName("");
  };

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <TextInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Entrez votre prénom"
        required
        version="normal"
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton
        Icon={<IoChevronForward className="chevron-icon" />

        }
        label="Accéder à votre espace"
        className="bouton-login"

      />




    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items:center;
  font-family: Amatic SC;

  

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

  .bouton-login {
    width: 400px;
    height: 53px;
    margin-top: 18px;
  }

  
`;
