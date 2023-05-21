import { Image } from 'antd'
import SongbirdLogo from '../../assets/Songbird.png'

import NavMenu from './NavMenu'

const SideNav = () => {
  return (
    <div style={{ marginRight: '32px' }}>
      <div
        style={{
          marginLeft: '4px',
          marginBottom: '32px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src={SongbirdLogo}
          alt='Songbird logo'
          style={{ maxHeight: '60%' }}
          preview={false}
        />
      </div>
      <NavMenu />
    </div>
  )
}

export default SideNav
