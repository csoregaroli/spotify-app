import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  HeartOutlined,
  TeamOutlined,
  PlusOutlined,
  HistoryOutlined,
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
  getItem('Recommended', '2', <HeartOutlined />, [
    getItem('History', '2.1', <HistoryOutlined />),
    getItem('New', '2.2', <PlusOutlined />),
  ]),
  getItem('Social', '3', <TeamOutlined />),
]

const NavMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState('')
  const [defaultOpenKeys, setDefaultOpenKeys] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    switch (path) {
      case HOME:
        setSelectedKeys('1')
        break
      case RECOMMENDED:
        setDefaultOpenKeys('2')
        setSelectedKeys('2.1')
        break
      case '':
        setSelectedKeys('2.2')
        break
      case SOCIAL:
        setSelectedKeys('3')
        break
      default:
        setSelectedKeys('1')
    }
  }, [path])

  const handleClick = ({ key }) => {
    switch (key) {
      case '1':
        setSelectedKeys(key)
        navigate(HOME)
        break
      case '2':
        setSelectedKeys(key)
        navigate(RECOMMENDED)
        break
      case '2.1':
        setSelectedKeys(key)
        navigate(RECOMMENDED)
        break
      case '2.2':
        setSelectedKeys(key)
        navigate(RECOMMENDED)
        break
      case '3':
        setSelectedKeys(key)
        navigate(SOCIAL)
        break
      default:
        setSelectedKeys(key)
        navigate(HOME)
    }
  }

  return (
    <div>
      <Menu
        defaultOpenKeys={[`${defaultOpenKeys}`]}
        items={items}
        mode='inline'
        onClick={handleClick}
        selectedKeys={[`${selectedKeys}`]}
        style={{ width: '200px', border: 'none' }}
      />
    </div>
  )
}

export default NavMenu
