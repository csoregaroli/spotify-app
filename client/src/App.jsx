import { Fragment, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { AuthUserContext, AuthUserProvider } from './context/AuthUserContext'
import { UserContext, UserProvider } from './context/UserContext'

import { Auth, Dashboard, Recommended, Social } from './pages'
import Navigation from './components/Navigation'

const AuthPages = () => {
  return (
    <Routes>
      <Route path='*' element={<Navigate to={ROUTES.SIGNIN} replace />} />
      <Route path={ROUTES.SIGNIN} element={<Auth />} />
      <Route path={ROUTES.SIGNUP} element={<Auth />} />
    </Routes>
  )
}

const AppPages = () => {
  const { currentUser } = useContext(UserContext)

  if (!currentUser) return 'loading...'

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigation />}>
        <Route index element={<Dashboard />} />
        <Route path={ROUTES.RECOMMENDED} element={<Recommended />} />
        <Route path={ROUTES.SOCIAL} element={<Social />} />
      </Route>

      <Route
        path={ROUTES.SIGNUP}
        element={<Navigate to={ROUTES.HOME} replace />}
      />
      <Route
        path={ROUTES.SIGNIN}
        element={<Navigate to={ROUTES.HOME} replace />}
      />
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
