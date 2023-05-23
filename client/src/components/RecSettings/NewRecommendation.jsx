import { useState } from 'react'
import { Modal } from 'antd'

import SelectGenres from '../SelectGenres'
import RecSlider from './RecSlider'

const customizations = [
  'Acousticness',
  'Danceability',
  'Energy',
  'Instrumentalness',
  'Popularity',
]

const NewRecommendation = ({ isOpen }) => {
  const [targetCustomizations, setTargetCustomizations] = useState()

  const saveCustomization = (title, value) => {
    console.log(title, value)
    setTargetCustomizations({ ...targetCustomizations, [title]: value })
  }

  return (
    <Modal open={isOpen}>
      <SelectGenres />
      <div>
        {customizations.map((customization) => (
          <RecSlider title={customization} cb={saveCustomization} />
        ))}
      </div>
    </Modal>
  )
}

export default NewRecommendation
