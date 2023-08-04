import { useState } from "react"
import React from "react"

export default function LoginForm() {
    //state
    const [name, setName] = useState("")

    //comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${name}`)

        setName("")
    };

    //affichage
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br></br>
            <h2>Connectez vous</h2>
            <input
                value={name}
                type="text"
                placeholder="Entrez votre prénom"
                onChange={(e) => setName(e.target.value)}
                required
            ></input>
            <button>Accedez à votre espace</button>
        </form>
    );
}
