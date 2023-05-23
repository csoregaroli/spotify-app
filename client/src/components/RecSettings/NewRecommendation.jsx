import { useEffect, useState } from 'react'
import { Button, Modal, notification } from 'antd'

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
  //   const [api, contextHolder] = notification.useNotification()
  const [displayNotification, setDisplayNotification] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState()
  const [sliderValues, setSliderValues] = useState()
  const [confirmLoading, setConfirmLoading] = useState(false)

  const successNotification = () => {
    notification.success({
      message: 'New recommendations generated!',
      placement: 'top',
    })
  }

  const errorNotification = () => {
    notification.error({
      message: 'Oops something went wrong.',
      description: 'Please try again.',
      placement: 'top',
    })
  }

  const saveSliderValue = (title, value) => {
    setSliderValues({ ...sliderValues, [title]: value })
  }

  useEffect(() => {
    if (displayNotification) {
      if (displayNotification.type === 'success') {
        successNotification()
      } else if (displayNotification.type === 'error') {
        errorNotification()
      }
      setDisplayNotification(null)
    }
  }, [displayNotification])

  const handleSubmit = async () => {
    setConfirmLoading(true)
    const response = await getRecommendations(selectedGenre, sliderValues)

    if (response?.status === 200) {
      setDisplayNotification({ type: 'success' })
    } else {
      setDisplayNotification({ type: 'error' })
    }

    setConfirmLoading(false)
    onClose()
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
