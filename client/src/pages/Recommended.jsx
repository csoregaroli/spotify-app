import { Hero } from '../components/Dashboard/Hero'

import SelectGenres from '../components/SelectGenres'
import RecOptions from '../components/RecSettings/RecOptions'

export const Recommended = () => {
  const pageHeader = 'Generate new recommendations'

  return (
    <div>
      <Hero titleText={pageHeader} />
      <SelectGenres />
      <div style={{ marginBottom: '48px' }} />
      <RecOptions />
    </div>
  )
}
