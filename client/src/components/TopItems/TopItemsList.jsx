import { Avatar, List, Typography } from 'antd'

import { useTopItems } from '../../hooks/useTopItems'

const ListHeader = ({ type }) => {
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <Typography.Title level={5} style={{ margin: '0' }}>
      Top {formattedType}
    </Typography.Title>
  )
}

const TopItemsList = ({ type, timeRange }) => {
  const { topItems, isLoading } = useTopItems(type, timeRange)
  const isTrack = type === 'tracks'
  const avatarShape = isTrack ? 'round' : 'square'

  if (isLoading || !topItems) return <div />

  return (
    <List
      itemLayout='horizontal'
      dataSource={topItems}
      bordered
      style={{ width: '384px' }}
      header={<ListHeader type={type} />}
      renderItem={(item) => (
        <List.Item>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '40px' }}
          >
            <Avatar src={item.imageUrl} shape={avatarShape} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '8px',
              }}
            >
              <Typography.Text strong>{item.name}</Typography.Text>
              {isTrack ? (
                <Typography.Text type='secondary' style={{ fontSize: '12px' }}>
                  {item.artists.join(', ')}
                </Typography.Text>
              ) : null}
            </div>
          </div>
        </List.Item>
      )}
    />
  )
}

export default TopItemsList
