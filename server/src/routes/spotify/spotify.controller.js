const axios = require('axios')

//SPOTIFY ENDPOINTS
const SPOTIFY_PLAYER_URL = 'https://api.spotify.com/v1/me/player'
const SPOTIFY_TOP_URL = 'https://api.spotify.com/v1/me/top'

async function httpGetCurrentTrack(req, res) {
  const accessToken = req.session.accessToken
  console.log(accessToken)

  const response = await axios.get(SPOTIFY_PLAYER_URL + '/currently-playing', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })

  if (response.status === 200) {
    const { item, is_playing } = response.data
    const trackName = item.name
    const imageUrl = item.album.images[1].url
    const isPlaying = is_playing
    const artistsResponse = item.artists

    //Get artists from response
    let artists = []
    artistsResponse.forEach((artist) => {
      artists.push(artist.name)
    })

    //Set current track
    const currentTrack = {
      artists,
      trackName,
      imageUrl,
      isPlaying,
    }

    return res.status(200).json(currentTrack)
  }

  return res.status(400).json({ error: 'Could not fetch track' })
}

async function httpGetTopItems(req, res) {
  const accessToken = req.session.accessToken
  const { type } = req.params
  const { limit, time_range } = req.query

  if (!limit || !time_range)
    return res.status(400).json({ error: 'missing request parameter' })

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
      const name = item.name
      const imageUrl = item.album.images[1].url

      //set artists
      let artists = []
      item.artists.forEach((artist) => {
        artists.push(artist.name)
      })

      const track = {
        name,
        imageUrl,
        artists,
      }

      return track
    })

    return res.status(200).json(topTracks)
  }

  if (type === 'artists') {
    const topArtists = items.map((item) => {
      const name = item.name
      const imageUrl = item.images[1].url
      const followers = item.followers.total

      const artist = {
        name,
        imageUrl,
        followers,
      }

      return artist
    })

    return res.status(200).json(topArtists)
  }
}

module.exports = { httpGetCurrentTrack, httpGetTopItems }
