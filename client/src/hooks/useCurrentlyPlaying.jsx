import { useState, useEffect } from 'react'
import axios from 'axios'
import { spotify_endpoints } from '../constants/routes'

export const useCurrentlyPlaying = () => {
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCurrentlyPlaying = async () => {
      const response = await axios.get(spotify_endpoints + '/current-track', {
        withCredentials: true,
      })
      console.log('response', response)

      setCurrentlyPlayingTrack(response)
      setIsLoading(false)
    }
    getCurrentlyPlaying()
  }, [])

  return { currentlyPlayingTrack, isLoading }
}
