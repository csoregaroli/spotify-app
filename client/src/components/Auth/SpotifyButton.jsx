import { useState } from 'react'
import { Fab } from '@mui/material'
import SpotifyIconWhite from '../../assets/SpotifyIconWhite.svg'

const SpotifyButton = ({ cta }) => {
  const [isHovered, setIsHovered] = useState(false)

  const textColor = isHovered ? '' : ''

  const fabStyle = {
    bgcolor: '#1DB954',
    '&:hover': {
      bgcolor: '#FFFFFF',
    },
  }

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Fab variant='extended' sx={{ ...fabStyle }}>
        <img src={SpotifyIconWhite} alt='Spotify Logo' />
        <div style={{ marginLeft: '8px', color: '#FFFFFF' }}>{cta}</div>
      </Fab>
    </div>
  )
}

export default SpotifyButton
