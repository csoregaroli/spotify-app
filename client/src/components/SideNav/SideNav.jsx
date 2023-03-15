import NavMenu from './NavMenu'

const SideNav = () => {
  return (
    <div style={{ marginRight: '32px' }}>
      <div
        style={{
          marginLeft: '4px',
          marginBottom: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Spotify App
      </div>
      <NavMenu />
    </div>
  )
}

export default SideNav
