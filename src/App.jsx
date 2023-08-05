import React, { useContext } from "react"
import { useState } from "react"
import LoginPage from "./components/pages/login/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OrderPage from "./components/pages/OrderPage"
import UserContext from './UserContext'

// import "./App.css";

function App() {

  const [username, setUsername] = useState('')

  //state

  // comportement
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage setUsername={setUsername} />,
    },
    {
      path: '/order',
      element: <OrderPage />,
    },
  ]);

  // affichage
  return (
    <UserContext.Provider value={username}>
      <RouterProvider router={router} />
    </UserContext.Provider>)
}

export default App
