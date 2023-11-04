import { useNavigate } from 'react-router-dom'
import { HOME } from '../../constants/routes'
import SongbirdLogo from '../../assets/Songbird.png'
import NavMenu from './NavMenu'

const SideNav = () => {
  const navigate = useNavigate()

  return (
    <div style={{ marginRight: '32px' }}>
      <div
        style={{
          marginLeft: '4px',
          marginBottom: '32px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => navigate(HOME)}
      >
        <img
          src={SongbirdLogo}
          alt='Songbird logo'
          style={{ maxHeight: '60%' }}
        />
      </div>
      <NavMenu />
    </div>
  )
}

export default SideNav
