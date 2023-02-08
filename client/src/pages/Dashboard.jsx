import { Button } from '@mui/material'

import { authUrl } from '../constants/routes'

const handleSignOut = () => {
  window.location.replace(authUrl + '/signout')
}

export const Dashboard = () => {
  return (
    <div>
      Dashboard Page
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  )
}
