import { Outlet, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import { HOME, RECOMMENDED, SOCIAL } from '../constants/routes'

const menuItems = [
  { label: 'Dashboard', key: '1', icon: <MailOutlined /> },
  { label: 'Recommended', key: '2', icon: <MailOutlined /> },
  { label: 'Friends', key: '3', icon: <MailOutlined /> },
]

const Navigation = () => {
  const navigate = useNavigate()

  const handleClick = ({ key }) => {
    switch (key) {
      case '1':
        navigate(HOME)
        console.log(key)
        break
      case '2':
        navigate(RECOMMENDED)
        break
      case '3':
        navigate(SOCIAL)
        break
      default:
        navigate()
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode='inline'
        items={menuItems}
        onClick={handleClick}
      /> */}
      <Outlet />
    </div>
  )
}

export default Navigation
