import { Tabs } from 'antd'

import TopItemsList from './TopItemsList'

const TopItems = () => {
  return (
    <div>
      <Tabs />
      <div style={{ display: 'flex', gap: '16px' }}>
        <TopItemsList type='tracks' />
        <TopItemsList type='artists' />
      </div>
    </div>
  )
}

export default TopItems
