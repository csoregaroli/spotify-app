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

const TopItemsList = ({ type }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='' />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '8px',
              }}
            >
              <Typography.Text strong>test</Typography.Text>
              <Typography.Text type='secondary' style={{ fontSize: '12px' }}>
                testing
              </Typography.Text>
            </div>
          </div>
        </List.Item>
      )}
    />
  )
}

export default TopItemsList
