import { useState, useEffect } from 'react'
import axios from 'axios'
import { spotifyEndpoints } from '../constants/routes'

export const useCurrentlyPlaying = () => {
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCurrentlyPlaying = async () => {
      const response = await axios.get(spotifyEndpoints + '/current-track', {
        withCredentials: true,
      })

      const { trackName, artists, imageUrl, isPlaying } = response?.data

      if (response.status === 200) {
        setCurrentlyPlayingTrack({ trackName, artists, imageUrl, isPlaying })
      } else {
        setCurrentlyPlayingTrack(null)
      }

      setIsLoading(false)
    }

    getCurrentlyPlaying()
  }, [])

  return { currentlyPlayingTrack, isLoading }
}
