import { BellOutlined } from '@ant-design/icons'

import UserAvatar from './UserAvatar'
import CurrentlyPlaying from './CurrentlyPlaying'

const Header = () => {
  return (
    <div
      style={{
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '32px',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <CurrentlyPlaying />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <BellOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
        <UserAvatar />
      </div>
    </div>
  )
}

export default Header
