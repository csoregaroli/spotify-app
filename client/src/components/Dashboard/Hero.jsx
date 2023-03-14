import { useContext } from 'react'
import { Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'

import UserAvatar from '../Header/UserAvatar'

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
