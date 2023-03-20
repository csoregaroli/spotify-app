import { useState } from 'react'
import { Tabs } from 'antd'

import TopItemsList from './TopItemsList'

const TopItems = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const tabNames = ['Last month', '6 months', 'All time']
  const tabItems = new Array(3).fill(null).map((_, i) => {
    const id = String(i)
    return {
      label: tabNames[id],
      key: id,
    }
  })

  const handleChange = (key) => {
    setSelectedTab(key)
    console.log(key)
  }

  return (
    <div style={{ marginTop: '56px' }}>
      <Tabs
        defaultActiveKey='0'
        type='card'
        items={tabItems}
        onChange={handleChange}
      />
      <div style={{ display: 'flex', gap: '16px' }}>
        <TopItemsList type='tracks' timeRange={selectedTab} />
        <TopItemsList type='artists' timeRange={selectedTab} />
      </div>
    </div>
  )
}

export default TopItems
