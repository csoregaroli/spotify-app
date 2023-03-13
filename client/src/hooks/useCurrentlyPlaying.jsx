import { useState, useEffect } from 'react'
import axios from 'axios'
import { spotify_endpoints } from '../constants/routes'

export const useCurrentlyPlaying = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  useEffect(() => {
    const getCurrentlyPlaying = async () => {
      const response = await axios.get(spotify_endpoints + '/current-track', {
        withCredentials: true,
      })

      console.log('data', response)

      setCurrentlyPlaying(response)
    }

    getCurrentlyPlaying()
  }, [])

  return { currentlyPlaying }
}
