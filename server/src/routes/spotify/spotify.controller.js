const axios = require('axios')
const SPOTIFY_API_PLAYER_URL = 'https://api.spotify.com/v1/me/player'

async function httpGetCurrentTrack(req, res) {
  const accessToken = req.session.accessToken
  console.log(accessToken)

  const response = await axios.get(
    SPOTIFY_API_PLAYER_URL + '/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (response.status === 200) {
    const { data } = response
    const { item, is_playing } = data

    const trackName = item.name
    const imageUrl = item.album.images[1].url

    //Get artists from response
    let artists = []
    const artistsResponse = data.item.artists
    artistsResponse.forEach((artist) => {
      artists.push(artist.name)
    })

    //Set current track
    const currentTrack = {
      artists,
      trackName,
      imageUrl,
      isPlaying: is_playing,
    }

    return res.status(200).json(currentTrack)
  }

  return res.status(400).json({ error: 'Could not fetch track' })
}

module.exports = { httpGetCurrentTrack }
