import { Fab } from '@mui/material'
import SpotifyLogo from '../../assets/SpotifyIcon1.svg'

const AuthPrompt = () => {
  return (
    <div>
      <Fab sx={{ background: '#1DB954' }} variant='extended'>
        <img src={SpotifyLogo} alt='Spotify Logo' />
        <div style={{ marginLeft: '8px', color: '#FFFFFF' }}>
          Sign up with Spotify
        </div>
      </Fab>
    </div>
  )
}

export default AuthPrompt
