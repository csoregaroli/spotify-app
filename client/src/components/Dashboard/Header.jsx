import { useContext } from 'react'
import { Typography, Avatar } from '@mui/material'
import { UserContext } from '../../context/UserContext'

export const Header = () => {
  const { currentUser } = useContext(UserContext)
  const { displayName, photo } = currentUser

  const firstName = displayName.split(' ')[0]

  return (
    <div>
      <Typography variant='h5'>Hi {firstName}!</Typography>
      <Avatar />
    </div>
  )
}
