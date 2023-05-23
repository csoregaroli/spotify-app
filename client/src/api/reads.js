import axios from 'axios'
import db from './firebase/firebaseConfig'
import { getDoc, getDocs, doc, collection } from 'firebase/firestore'
import { url, spotifyEndpoints } from '../constants/routes'
import { convertGenreSeedToGenre } from '../utils/utils'

export const getAuthUser = async () => {
  const response = await axios.get(url + '/user', { withCredentials: true })
  return response
}

export const getCurrentUser = async (id) => {
  if (!id) return

  const userDocRef = doc(db, 'users', id)
  const userSnapshot = await getDoc(userDocRef)

  return userSnapshot.data()
}

export const getTopItems = async (type, limit, timeRange) => {
  const response = await axios.get(
    spotifyEndpoints + `/top/${type}?limit=${limit}&time_range=${timeRange}`,
    {
      withCredentials: true,
    }
  )
  return response
}

export const getGenres = async () => {
  const querySnapshot = await getDocs(collection(db, 'genres'))

  const genres = []
  querySnapshot.forEach((doc) => {
    const genreSeed = doc.data()['seed']
    const genreName = convertGenreSeedToGenre(genreSeed)
    genres.push({
      seed: genreSeed,
      name: genreName,
    })
  })
  return genres
}

export const getRecommendations = async (genre, targets) => {
  const targetValues = Object.entries(targets)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

  const requestQuery = `?reqSeedGenres=${genre}&${targetValues}`

  const response = await axios.get(
    spotifyEndpoints + '/recommendations' + requestQuery,
    { withCredentials: true }
  )

  return response
}
