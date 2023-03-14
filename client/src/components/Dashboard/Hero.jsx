import { useContext } from 'react'
import { Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'

export const Hero = () => {
  const { currentUser } = useContext(UserContext)
  const { displayName } = currentUser
  const firstName = displayName.split(' ')[0]

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h5'>Hi {firstName}!</Typography>
      </div>
    </div>
  )
}
