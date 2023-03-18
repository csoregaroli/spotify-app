import { Fragment, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Avatar, List } from 'antd'

import * as ROUTES from './constants/routes'

import { AuthUserContext, AuthUserProvider } from './context/AuthUserContext'
import { UserContext, UserProvider } from './context/UserContext'

import { Auth, Dashboard, Recommended, Social } from './pages'
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'

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
    <div style={{ display: 'flex' }}>
      <SideNav />
      <div style={{ width: '100%' }}>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.RECOMMENDED} element={<Recommended />} />
          <Route path={ROUTES.SOCIAL} element={<Social />} />

          <Route
            path={ROUTES.SIGNUP}
            element={<Navigate to={ROUTES.HOME} replace />}
          />
          <Route
            path={ROUTES.SIGNIN}
            element={<Navigate to={ROUTES.HOME} replace />}
          />
        </Routes>
      </div>
    </div>
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
