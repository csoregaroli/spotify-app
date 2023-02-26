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

  return res.status(200).json(response.data)
}

module.exports = { httpGetCurrentTrack }
