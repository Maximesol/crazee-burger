import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs"

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
            <hr className="separation" />
            <h2>Connectez-vous</h2>
            <div className="div--input">
                <BsPersonCircle className="icon" />
                <input
                    value={name}
                    type="text"
                    placeholder="Entrez votre prénom"
                    onChange={(e) => setName(e.target.value)}
                    required
                ></input>
            </div>

            <button>Accédez à votre espace</button>


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

  button {

    display: flex;
    width: 400px;
    height: 53px;
    padding: 18px 106.203px;
    justify-content: center;
    align-items: flex-start;
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
  }

  h1 {
    color: #FFF;
    text-align: center;
    font-family: Amatic SC;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    
    
  }

  .div--input {
    outline: none;
    display: inline-flex;
    justify-content:flex-start;
    align-items: center;
    gap: 12.797px;
    border-radius: 5px;
    background: #FFF;
    color: #747B91;
    font-size: 16px;
    width: 400px;
    height: 53px;

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

  input {
    border: none;
    outline: none;
    background: #FFF;
    color: #747B91;
    font-size: 16px;
    

  }

  .separation {
    width: 400px;
    height: 2px;
    border: 1px solid #F56A2C;
    background: #F56A2C;
  }

  
`;
