import { useState } from 'react'
import { Popover, Button, Box } from '@mui/material'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

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
        size='large'
        style={{ cursor: 'pointer' }}
        icon={<UserOutlined />}
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

export default UserAvatar
