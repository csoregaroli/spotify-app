import { useState, useEffect } from 'react'

import { getTopItems } from '../api/reads'

export const useTopItems = (type) => {
  const [topItems, setTopItems] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopItems(type, 5, 'medium_term')

      if (response.status === 200) {
        setTopItems(response.data)
      } else {
        setTopItems(null)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [type])

  return { topItems, isLoading }
}
