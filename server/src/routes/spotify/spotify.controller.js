const axios = require('axios')

const { convertArtistsToArray } = require('./spotify.utils')
const { addRecsToFirestore } = require('../../models/spotify/spotify.model')
const { addGenresToFirestore } = require('../../models/spotify/genres.model')

//SPOTIFY API ENDPOINTS
const SPOTIFY_PLAYER_URL = 'https://api.spotify.com/v1/me/player'
const SPOTIFY_TOP_URL = 'https://api.spotify.com/v1/me/top'
const SPOTIFY_RECOMMENDATIONS_URL = 'https://api.spotify.com/v1/recommendations'

//ENDPOINTS
async function httpGetCurrentTrack(req, res) {
  const accessToken = req.session.accessToken

  try {
    const response = await axios.get(
      SPOTIFY_PLAYER_URL + '/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.status === 200) {
      const { item, is_playing } = response.data
      const id = item.id
      const trackName = item.name
      const imageUrl = item.album.images[1].url
      const isPlaying = is_playing
      const artists = convertArtistsToArray(item.artists)

      const currentTrack = {
        id,
        trackName,
        imageUrl,
        isPlaying,
        artists,
      }

      return res.status(200).json(currentTrack)
    } else if (response.status === 204) {
      return res.status(204).json({ error: 'No track currently playing' })
    }

    return res.status(400).json({ error: 'Could not fetch track' })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: 'Could not fetch track' })
  }
}

async function httpGetTopItems(req, res) {
  const accessToken = req.session.accessToken
  const { type } = req.params
  const limit = req.query.limit || 10
  const time_range = req.query.time_range || 'medium_term'

  const VALID_TYPES = ['tracks', 'artists']

  // if (!accessToken)
  //   return res.status(401).json({ error: 'invalid access token' })

  if (!VALID_TYPES.includes(type))
    return res.status(400).json({ error: 'invalid type' })

  try {
    const response = await axios.get(
      SPOTIFY_TOP_URL + `/${type}?limit=${limit}&time_range=${time_range}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    const { items } = response.data

    if (type === 'tracks') {
      const topTracks = items.map((item) => {
        const id = item.id
        const name = item.name
        const imageUrl = item.album.images[1].url
        const artists = convertArtistsToArray(item.artists)

        const track = {
          id,
          name,
          imageUrl,
          artists,
        }

        return track
      })
      return res.status(200).json(topTracks)
    } else if (type === 'artists') {
      const topArtists = items.map((item) => {
        const id = item.id
        const name = item.name
        const imageUrl = item.images[1].url
        const followers = item.followers.total

        const artist = {
          id,
          name,
          imageUrl,
          followers,
        }

        return artist
      })
      return res.status(200).json(topArtists)
    }
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: `Could not fetch top ${type}` })
  }
}

async function httpGetRecommendations(req, res) {
  const accessToken = req.session.accessToken
  const userId = req.user?.id
  const {
    reqSeedArtists,
    reqSeedGenres,
    reqSeedTracks,
    acousticness,
    danceability,
    energy,
    instrumentalness,
    popularity,
  } = req.query

  // if (!accessToken)
  //   return res.status(401).json({ error: 'No access token provided' })

  if (!reqSeedArtists && !reqSeedGenres && !reqSeedTracks)
    return res.status(400).json({ error: 'Missing required request query' })

  const requestOptions = {
    // seedArtists: `seed_artists=${reqSeedArtists}`,
    seedGenres: `seed_genres=${reqSeedGenres}`,
    // seedTracks: `seed_tracks=${reqSeedTracks}`,
    targetAcousticness: `target_acousticness=${acousticness}`,
    targetDanceability: `target_danceability=${danceability}`,
    targetEnergy: `target_energy=${energy}`,
    targetInstrumentalness: `target_instrumentalness=${instrumentalness}`,
    targetPopularity: `target_popularity=${popularity}`,
  }

  const requestQuery = Object.values(requestOptions).join('&')
  const requestUrl = SPOTIFY_RECOMMENDATIONS_URL + '?' + requestQuery

  try {
    const response = await axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    const { tracks } = response.data

    const recommendedTracks = tracks.map((track) => {
      const id = track.id
      const name = track.name
      const imageUrl = track.album.images[1].url
      const artists = convertArtistsToArray(track.artists)

      const recommendedtrack = {
        id,
        name,
        imageUrl,
        artists,
      }

      return recommendedtrack
    })

    await addRecsToFirestore(userId, recommendedTracks)
    return res.status(200).json(recommendedTracks)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: 'Could not generate recommendations' })
  }
}

async function httpGetGenres(req, res) {
  const accessToken = req.session.accessToken

  try {
    const response = await axios.get(
      SPOTIFY_RECOMMENDATIONS_URL + '/available-genre-seeds',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.status === 200) {
      const { genres } = response?.data
      addGenresToFirestore(genres)
      return res
        .status(200)
        .json({ message: 'Genres successfully added to Firestore' })
    }

    return res.status(400).json({ error: 'Could not fetch genres' })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: 'Could not fetch genres' })
  }
}

module.exports = {
  httpGetCurrentTrack,
  httpGetTopItems,
  httpGetRecommendations,
  httpGetGenres,
}
