import { useContext } from 'react'
import { Typography } from 'antd'

import { UserContext } from '../../context/UserContext'

export const Hero = () => {
  const { currentUser } = useContext(UserContext)
  const { displayName } = currentUser
  const firstName = displayName.split(' ')[0]

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography.Text strong={true} style={{ fontSize: '24px' }}>
          Hi {firstName}!
        </Typography.Text>
      </div>
    </div>
  )
}
