import { Card, Avatar, Typography } from 'antd'

import { useCurrentlyPlaying } from '../../hooks/useCurrentlyPlaying'

const CurrentlyPlaying = () => {
  const { currentlyPlayingTrack, isLoading } = useCurrentlyPlaying()

  if (isLoading || !currentlyPlayingTrack) return <div></div>

  //Set component variables
  const { trackName, artists, imageUrl, isPlaying } = currentlyPlayingTrack
  const artistsString = artists.join(', ')

  return (
    <Card size='small' style={{ minWidth: '256px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar shape='square' src={imageUrl} style={{ marginRight: '8px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography.Text>{trackName}</Typography.Text>
          <Typography.Text type='secondary' style={{ fontSize: '10px' }}>
            {artistsString}
          </Typography.Text>
        </div>
      </div>
    </Card>
  )
}

export default CurrentlyPlaying
