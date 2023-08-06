import React, { useContext } from "react"
import { useState } from "react"
import LoginPage from "./components/pages/login/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OrderPage from "./components/pages/OrderPage"
import UserContext from './UserContext'
import ErrorPage from "./components/pages/ErrorPage"

// import "./App.css";

function App() {

  const [username, setUsername] = useState('')

  //state

  // comportement
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage setUsername={setUsername} />,
    },
    {
      path: '/login',
      element: <LoginPage setUsername={setUsername} />,
    },
    {
      path: '/order',
      element: <OrderPage />,
    },
    {
      path: '*', // Route joker
      element: <ErrorPage />,
    },
  ]);


  // affichage
  return (
    <UserContext.Provider value={username}>
      <RouterProvider router={router} />
    </UserContext.Provider>)
}

export default App