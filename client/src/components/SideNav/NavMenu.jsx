import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
  const [selectedKey, setSelectedKey] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    switch (path) {
      case HOME:
        setSelectedKey('1')
        break
      case RECOMMENDED:
        setSelectedKey('2')
        break
      case SOCIAL:
        setSelectedKey('3')
        break
      default:
        setSelectedKey('1')
    }
  }, [path])

  const handleClick = ({ key }) => {
    switch (key) {
      case '1':
        setSelectedKey(key)
        navigate(HOME)
        break
      case '2':
        setSelectedKey(key)
        navigate(RECOMMENDED)
        break
      case '3':
        setSelectedKey(key)
        navigate(SOCIAL)
        break
      default:
        setSelectedKey(key)
        navigate(HOME)
    }
  }

  return (
    <div>
      <Menu
        style={{ width: '192px', border: 'none' }}
        selectedKeys={[`${selectedKey}`]}
        items={menuItems}
        onClick={handleClick}
      />
    </div>
  )
}

export default NavMenu
