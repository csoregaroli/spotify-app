import { useState, useContext } from 'react'
import { Typography, Avatar, Popover, Button, Box } from '@mui/material'
import { UserContext } from '../../context/UserContext'

import { authUrl } from '../../constants/routes'

const UserAvatar = (props) => {
  const { photo, firstName } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const isOpen = Boolean(anchorEl)
  const popoverId = isOpen ? 'popover' : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSignOut = () => {
    window.location.replace(authUrl + '/signout')
  }

  return (
    <div>
      <Avatar
        src={photo}
        alt={firstName}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <Popover
        id={popoverId}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box>
          <Button onClick={handleSignOut}>Sign out</Button>
        </Box>
      </Popover>
    </div>
  )
}

export const Header = () => {
  const { currentUser } = useContext(UserContext)
  const { displayName, photo } = currentUser

  const firstName = displayName.split(' ')[0]

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h5'>Hi {firstName}!</Typography>
      </div>
      <UserAvatar photo={photo} firstName={firstName} />
    </div>
  )
}
