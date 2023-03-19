import { Avatar, List, Typography } from 'antd'

const data = [
  {
    title: 'bla bla bla bla bla',
  },
  {
    title: '2',
  },
  {
    title: '3',
  },
  {
    title: '4',
  },
]

const ListHeader = ({ type }) => {
  return (
    <Typography.Title level={5} style={{ margin: '0' }}>
      Top {type.charAt(0).toUpperCase() + type.slice(1)}
    </Typography.Title>
  )
}

const TopItemsList = ({ type }) => {
  const isTrack = type === 'tracks'

  const avatarShape = isTrack ? 'round' : 'square'

  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      header={<ListHeader type={type} />}
      style={{ width: '384px' }}
      renderItem={(item) => (
        <List.Item>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='' shape={avatarShape} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '8px',
              }}
            >
              <Typography.Text strong>{item.title}</Typography.Text>
              {isTrack ? (
                <Typography.Text type='secondary' style={{ fontSize: '12px' }}>
                  description
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
