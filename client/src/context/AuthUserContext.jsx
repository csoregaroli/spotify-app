import { useState, useEffect, createContext } from 'react'

import { getAuthUser } from '../api/reads'

export const AuthUserContext = createContext({
  setAuthUser: () => null,
  authUser: null,
  setLoadingAuth: () => null,
  loadingAuth: null,
})

export const AuthUserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)

  useEffect(() => {
    const fetchAuth = async () => {
      setLoadingAuth(true)
      const response = await getAuthUser()
      const auth = response?.data
      setAuthUser(auth)
      setLoadingAuth(false)
    }

    fetchAuth()
  }, [])

  const value = { authUser, setAuthUser, loadingAuth }
  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  )
}
