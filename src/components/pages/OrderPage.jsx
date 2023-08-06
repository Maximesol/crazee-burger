import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import UserContext from "../../UserContext";

export default function OrderPage() {
    //state
    const navigate = useNavigate()
    const username = useContext(UserContext)

    //comportement
    const handleClick = () => {
        navigate('/login')
    }

    //affichage

    return (
        <div>
            <h1>{`Bonjour ${username}`}</h1>
            <button onClick={handleClick}>Deconnexion</button>
        </div>
    )
}