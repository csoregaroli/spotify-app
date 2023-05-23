import { useState } from 'react'
import { Modal } from 'antd'

import SelectGenres from '../SelectGenres'
import RecSlider from './RecSlider'

const customizations = [
  'acousticness',
  'danceability',
  'energy',
  'instrumentalness',
  'popularity',
]

const modalTitle = 'Generate new recommendations'

const NewRecommendation = ({ isOpen }) => {
  const [selectedGenre, setSelectedGenre] = useState()
  const [sliderValues, setSliderValues] = useState()

  const saveSliderValue = (title, value) => {
    setSliderValues({ ...sliderValues, [title]: value })
  }

  return (
    <div>
      <Modal open={isOpen} title={modalTitle}>
        <div style={{ marginBottom: '32px' }}>
          <SelectGenres cb={setSelectedGenre} />
          {customizations.map((customization) => (
            <RecSlider title={customization} cb={saveSliderValue} />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default NewRecommendation
