import { Button } from 'antd'
import { Hero } from '../components/Dashboard/Hero'

import NewRecommendation from '../components/RecSettings/NewRecommendation'
import { useState } from 'react'

export const Recommended = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pageHeader = 'Recommended Tracks'

  return (
    <div>
      <Hero titleText={pageHeader} />
      <Button type='primary' onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <NewRecommendation isOpen={isOpen} />
    </div>
  )
}
