import { Fragment, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { AuthUserContext, AuthUserProvider } from './context/AuthUserContext'
import { UserContext, UserProvider } from './context/UserContext'

import { Auth, Dashboard } from './pages'

const AuthPages = () => {
  return <div>this is the auth page</div>
}

const AppPages = () => {
  const { currentUser } = useContext(UserContext)

  if (!currentUser) return 'loading...'

  return (
    <Routes>
      <Route path={ROUTES.SIGNIN} element={<Auth />} />
      <Route path={ROUTES.HOME} element={<Dashboard />} />
    </Routes>
  )
}

const AppRoot = () => {
  const { authUser, loadingAuth } = useContext(AuthUserContext)

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
