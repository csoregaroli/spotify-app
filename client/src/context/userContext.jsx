import { useState, useEffect, createContext } from 'react'

import { getCurrentUser } from '../api/reads'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  setIsLoading: () => null,
  isLoading: null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser()
      setCurrentUser(user)
      setIsLoading(false)
    }

    fetchUser()
  }, [])

  const value = { currentUser, setCurrentUser, isLoading }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
