import { Button } from '@mui/material'
import { Header } from '../components/Dashboard'

import { authUrl } from '../constants/routes'

const handleSignOut = () => {
  window.location.replace(authUrl + '/signout')
}

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  )
}
