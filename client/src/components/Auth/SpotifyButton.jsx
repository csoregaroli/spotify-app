import { Button } from 'antd'
import SpotifyLogoWhite from '../../assets/SpotifyIcon24.svg'

import { authUrl } from '../../constants/routes'

const SpotifyButton = ({ cta }) => {
  const spotifyGreen = '#1DB954'

  const buttonStyles = {
    backgroundColor: spotifyGreen,
    '&:hover': {
      backgroundColor: '#169b45',
    },
    marginTop: '32px',
    marginBottom: '32px',
  }

  const handleClick = () => {
    window.location.replace(authUrl + '/spotify')
  }

  return (
    <Button
      type='primary'
      shape='round'
      size='large'
      onClick={handleClick}
      style={buttonStyles}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={SpotifyLogoWhite} alt='Spotify logo' />
        {cta}
      </div>
    </Button>
  )
}

export default SpotifyButton
