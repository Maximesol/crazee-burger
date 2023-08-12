import React from "react"
import { useState } from "react"
import LoginPage from "./components/pages/login/LoginPage"
import { Routes, Route } from 'react-router-dom'
import OrderPage from "./components/pages/order/OrderPage"
import ErrorPage from "./components/pages/ErrorPage"

// import "./App.css";

function App() {

  const [username, setUsername] = useState('')

  //state

  // comportement



  // affichage
  return (

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App