import { useState, useEffect } from 'react'

import { getTopItems } from '../api/reads'

export const useTopItems = (type, timeRange) => {
  const [topItems, setTopItems] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopItems(type, 5, timeRange)

      if (response.status === 200) {
        setTopItems(response.data)
      } else {
        setTopItems(null)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [type, timeRange])

  return { topItems, isLoading }
}
