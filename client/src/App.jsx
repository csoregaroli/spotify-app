import { Fragment, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AuthUserContext, AuthUserProvider } from './context/AuthUserContext'
import { UserContext, UserProvider } from './context/UserContext'

const AuthPages = () => {
  return <div>this is the auth page</div>
}

const AppPages = () => {
  const { currentUser } = useContext(UserContext)

  console.log(currentUser)

  if (!currentUser) return 'loading...'

  return <div>these are the app pages</div>
}

const AppRoot = () => {
  const { authUser, loadingAuth } = useContext(AuthUserContext)

  console.log(loadingAuth, authUser)

  if (loadingAuth) return 'loading...'

  return <Fragment>{!authUser ? <AuthPages /> : <AppPages />}</Fragment>
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthUserProvider>
        <UserProvider>
          <AppRoot />
        </UserProvider>
      </AuthUserProvider>
    </BrowserRouter>
  )
}

export default App
