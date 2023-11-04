import { Button } from 'antd'
import { Hero } from '../components/Dashboard/Hero'

import NewRecommendation from '../components/RecSettings/NewRecommendation'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'

export const Recommended = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pageHeader = 'Recommended Tracks'

  return (
    <div>
      <Hero titleText={pageHeader} />
      <Button
        type='default'
        onClick={() => setIsOpen(true)}
        icon={<PlusOutlined />}
      >
        New
      </Button>
      <NewRecommendation
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
    </div>
  )
}
