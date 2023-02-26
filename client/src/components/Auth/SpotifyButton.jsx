import { Box, Fab } from '@mui/material'
import SpotifyIconWhite from '../../assets/SpotifyIconWhite.svg'

import { authUrl } from '../../constants/routes'

const SpotifyButton = ({ cta }) => {
  const spotifyGreen = '#1DB954'

  const fabStyle = {
    bgcolor: spotifyGreen,
    '&:hover': {
      bgcolor: '#169b45',
    },
  }

  const handleClick = () => {
    window.location.replace(authUrl + '/spotify')
  }

  return (
    <Fab variant='extended' sx={{ ...fabStyle }} onClick={handleClick}>
      <img src={SpotifyIconWhite} alt='Spotify Logo' />
      <Box sx={{ marginLeft: '8px', color: '#FFFFFF' }}>{cta}</Box>
    </Fab>
  )
}

export default SpotifyButton
