import { Card, Avatar, Typography } from 'antd'

import { useCurrentlyPlaying } from '../../hooks/useCurrentlyPlaying'

const currentTrack = {
  trackName: 'Da Fonk (feat. Joni)',
  artists: ['Mochakk', 'Joni'],
  imageUrl: '',
  isPlaying: true,
}

// const { trackName, artists, imageUrl, isPlaying } = currentTrack
// const artistsString = artists.join(', ')

const CurrentlyPlaying = () => {
  const { currentlyPlayingTrack, isLoading } = useCurrentlyPlaying()
  console.log(isLoading)

  if (isLoading) return <Card />

  console.log(currentlyPlayingTrack?.trackName)
  const { trackName, artists, imageUrl, isPlaying } =
    currentlyPlayingTrack?.data
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
