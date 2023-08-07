import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
    // state
    const [name, setName] = useState("");
    const navigate = useNavigate()


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
            <br></br>
            <h2>Connectez-vous</h2>
            <input
                value={name}
                type="text"
                placeholder="Entrez votre prénom"
                onChange={(e) => setName(e.target.value)}
                required
            ></input>

            <button>Accédez à votre espace</button>


        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
  background: green;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
