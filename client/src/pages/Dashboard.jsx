import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

import { Hero } from '../components/Dashboard'
import TopItems from '../components/TopItems/TopItems'

export const Dashboard = () => {
  const { currentUser } = useContext(UserContext)
  const { displayName } = currentUser
  const firstName = displayName.split(' ')[0]

  const pageHeader = `Hi ${firstName}!`

  return (
    <div>
      <Hero titleText={pageHeader} />
      <TopItems />
    </div>
  )
}
