import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  HeartOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import { HOME, RECOMMENDED, SOCIAL } from '../../constants/routes'

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('Recommended', '2', <HeartOutlined />),
  getItem('Social', '3', <TeamOutlined />),
]

const routeToKeys = {
  [HOME]: { openKey: '', selectedKey: '1' },
  [RECOMMENDED]: { openKey: '2', selectedKey: '2' },
  [SOCIAL]: { openKey: '', selectedKey: '3' },
}

const keyToRoute = {
  1: HOME,
  2: RECOMMENDED,
  3: SOCIAL,
}

const NavMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    const keys = routeToKeys[path] || routeToKeys[HOME]
    setSelectedKeys([keys.selectedKey])
  }, [path])

  const handleClick = ({ key }) => {
    console.log(key)
    setSelectedKeys(key)
    navigate(keyToRoute[key] || HOME)
  }

  return (
    <div>
      <Menu
        items={items}
        onClick={handleClick}
        selectedKeys={selectedKeys}
        style={{ width: '200px', border: 'none' }}
      />
    </div>
  )
}

export default NavMenu
