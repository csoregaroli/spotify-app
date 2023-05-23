import { useState } from 'react'
import { Button, Modal } from 'antd'

import SelectGenres from '../SelectGenres'
import RecSlider from './RecSlider'
import { getRecommendations } from '../../api/reads'

const customizations = [
  'Acousticness',
  'Danceability',
  'Energy',
  'Instrumentalness',
  'Popularity',
]

const modalTitle = 'Generate new recommendations'

const NewRecommendation = ({ isOpen, onClose }) => {
  const [selectedGenre, setSelectedGenre] = useState()
  const [sliderValues, setSliderValues] = useState()
  const [confirmLoading, setConfirmLoading] = useState(false)

  const saveSliderValue = (title, value) => {
    setSliderValues({ ...sliderValues, [title]: value })
  }

  const handleSubmit = async () => {
    // setConfirmLoading(true)
    const response = await getRecommendations(selectedGenre, sliderValues)

    console.log(response)
    // if (response?.status === 200) {
    //   //   setConfirmLoading(false)
    // }
  }

  return (
    <div>
      <Modal
        open={isOpen}
        title={modalTitle}
        onCancel={onClose}
        footer={[
          <Button
            type='primary'
            onClick={handleSubmit}
            loading={confirmLoading}
          >
            Generate
          </Button>,
        ]}
      >
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
