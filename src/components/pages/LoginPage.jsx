import React from "react";
import { useState } from "react";

export default function LoginPage() {
  //state

  const [name, setName] = useState("");

  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  // affichage

  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <br></br>
      <h2>Connectez vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Entrez votre prénom"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <button>Accedez à votre espace</button>
      </form>
    </div>
  );
}
