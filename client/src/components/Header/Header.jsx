import UserAvatar from './UserAvatar'

const Header = () => {
  return (
    <div
      style={{
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3>Spotify App</h3>
      </div>
      <UserAvatar />
    </div>
  )
}

export default Header
