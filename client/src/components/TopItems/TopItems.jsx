import { useState } from 'react'
import { Tabs } from 'antd'

import TopItemsList from './TopItemsList'

const TopItems = () => {
  const defaultTab = 'short_term'
  const [selectedTab, setSelectedTab] = useState(defaultTab)

  const tabNames = ['Last month', '6 months', 'All time']
  const tabItems = new Array(3).fill(null).map((_, i) => {
    const id = String(i)
    return {
      label: tabNames[id],
      key: id,
    }
  })

  const handleChange = (key) => {
    switch (key) {
      case '0':
        setSelectedTab('short_term')
        break
      case '1':
        setSelectedTab('medium_term')
        break
      case '2':
        setSelectedTab('long_term')
        break
      default:
        setSelectedTab('short_term')
    }
  }

  return (
    <div style={{ marginTop: '32px' }}>
      <Tabs defaultActiveKey='0' items={tabItems} onChange={handleChange} />
      <div style={{ display: 'flex', gap: '16px' }}>
        <TopItemsList type='tracks' timeRange={selectedTab} />
        <TopItemsList type='artists' timeRange={selectedTab} />
      </div>
    </div>
  )
}

export default TopItems
