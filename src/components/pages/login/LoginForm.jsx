import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import { TbHandClick } from "react-icons/tb"
import TextInput from "../../reusable-ui/TextInput";



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
            <button>
                Accédez à votre espace
                <div className="chevron-icon">
                    <IoChevronForward />
                    <TbHandClick className="click-icon" />

                </div>
            </button>




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

  .chevron-icon {
  width: 15px;
  height: 15px;
}

button .click-icon {
    opacity: 0;
    transition: opacity 0.3s;
}

button:active .click-icon {
    opacity: 1;
    width: 76px;
    height: 82px;
    color: white;
}




  button {
    

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
  }

  button:hover {
  background: #FFF;
  color: #FF9F1B; /* Changer la couleur du texte si nécessaire */
}

 

  h1 {
    color: #FFF;
    text-align: center;
    font-family: Amatic SC;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    
    
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
