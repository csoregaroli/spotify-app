import { Avatar, List } from 'antd'

const data = [
  {
    title: '1',
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
    <div>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src='' />}
              title={item.title}
              description={'description'}
            />
          </List.Item>
        )}
      ></List>
    </div>
  )
}

export default TopItemsList
