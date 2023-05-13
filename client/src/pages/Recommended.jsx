import SelectGenres from '../components/SelectGenres'
import RecOptions from '../components/RecSettings/RecOptions'

export const Recommended = () => {
  return (
    <div>
      <SelectGenres />
      <div style={{ marginBottom: '48px' }} />
      <RecOptions />
    </div>
  )
}
