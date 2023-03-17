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
      const { trackName, artists, imageUrl, isPlaying } = response?.data

      if (response?.status !== 200) {
        setCurrentlyPlayingTrack(null)
        setIsLoading(false)
      }

      setCurrentlyPlayingTrack({ trackName, artists, imageUrl, isPlaying })
      setIsLoading(false)
    }
    getCurrentlyPlaying()
  }, [])

  return { currentlyPlayingTrack, isLoading }
}
