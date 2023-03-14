import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import { HOME, RECOMMENDED, SOCIAL } from '../../constants/routes'

const menuItems = [
  { label: 'Dashboard', key: '1', icon: <MailOutlined /> },
  { label: 'Recommended', key: '2', icon: <MailOutlined /> },
  { label: 'Friends', key: '3', icon: <MailOutlined /> },
]

const NavMenu = () => {
  const navigate = useNavigate()

  const handleClick = ({ key }) => {
    switch (key) {
      case '1':
        navigate(HOME)
        break
      case '2':
        navigate(RECOMMENDED)
        break
      case '3':
        navigate(SOCIAL)
        break
      default:
        navigate(HOME)
    }
  }

  return (
    <div>
      <Menu
        style={{ width: 224, border: 'none' }}
        defaultSelectedKeys={['1']}
        items={menuItems}
        onClick={handleClick}
      />
    </div>
  )
}

export default NavMenu
