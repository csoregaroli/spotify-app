import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  HeartOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import { HOME, RECOMMENDED, SOCIAL } from '../../constants/routes'

const menuItems = [
  { label: 'Dashboard', key: '1', icon: <AppstoreOutlined /> },
  { label: 'Recommended', key: '2', icon: <HeartOutlined /> },
  { label: 'Social', key: '3', icon: <TeamOutlined /> },
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
        style={{ width: '192px', border: 'none' }}
        defaultSelectedKeys={['1']}
        items={menuItems}
        onClick={handleClick}
      />
    </div>
  )
}

export default NavMenu
