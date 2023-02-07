import { useState, useEffect, createContext, useContext } from 'react'

import { getCurrentUser } from '../api/reads'
import { AuthUserContext } from './AuthUserContext'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const { authUser } = useContext(AuthUserContext)

  useEffect(() => {
    const fetchUser = async () => {
      if (!authUser) return

      const response = await getCurrentUser(authUser)
      const user = { id: 'csoregaroli', ...response }
      setCurrentUser(user)
    }

    fetchUser()
  }, [authUser])

  const value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
