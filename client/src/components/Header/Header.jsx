import { Outlet } from 'react-router-dom'
import UserAvatar from './UserAvatar'

const Header = () => {
  return (
    <div>
      <UserAvatar />
      <Outlet />
    </div>
  )
}

export default Header
