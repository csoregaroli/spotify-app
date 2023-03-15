import { useContext } from 'react'
import { Avatar, Popover, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { UserContext } from '../../context/UserContext'
import { authUrl } from '../../constants/routes'

const PopoverContent = () => {
  const handleSignOut = () => {
    window.location.replace(authUrl + '/signout')
  }
  return (
    <Button type='text' onClick={handleSignOut}>
      Sign out
    </Button>
  )
}

const UserAvatar = () => {
  const { currentUser } = useContext(UserContext)
  const { photo } = currentUser

  return (
    <div>
      <Popover content={<PopoverContent />} trigger='click'>
        <Avatar
          src={photo}
          alt='Profile photo'
          size='large'
          style={{ cursor: 'pointer' }}
          icon={<UserOutlined />}
        />
      </Popover>
    </div>
  )
}

export default UserAvatar
