import { Fab } from '@mui/material'
import SpotifyIconWhite from '../../assets/SpotifyIconWhite.svg'

const SpotifyButton = ({ cta }) => {
  const spotifyGreen = '#1DB954'

  const fabStyle = {
    bgcolor: spotifyGreen,
    '&:hover': {
      bgcolor: '#169b45',
    },
  }

  return (
    <Fab variant='extended' sx={{ ...fabStyle }}>
      <img src={SpotifyIconWhite} alt='Spotify Logo' />
      <div style={{ marginLeft: '8px', color: '#FFFFFF' }}>{cta}</div>
    </Fab>
  )
}

export default SpotifyButton
