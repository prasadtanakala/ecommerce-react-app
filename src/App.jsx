import React from 'react'
import { Navigate } from 'react-router-dom'


const App = () => {
  const PrivateRoute = ({ children }) => {
    return localStorage.getItem('token') ? <> <Header /> {children} </> : <Navigate to="/" />
  }
  return (
    <>
      Hello World
    </>
  )
}

export default App