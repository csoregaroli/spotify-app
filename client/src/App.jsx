import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { UserContext, UserProvider } from './context/userContext'

const AuthPages = () => {}

const AppPages = () => {}

const AppRoot = () => {
  const { currentUser, isLoading } = useContext(UserContext)

  console.log(currentUser)
  console.log(isLoading)

  return <div>Hello World</div>
}

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoot />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
