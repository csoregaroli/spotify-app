import { Slider, Typography } from 'antd'
const { Text } = Typography

const RecSlider = ({ title, cb }) => {
  const defaultValue = 50

  const handleChange = (value) => {
    const convertedValue = title !== 'Popularity' ? value / 100 : value
    cb(title.toLowerCase(), convertedValue)
  }

  return (
    <div style={{ marginTop: '16px' }}>
      <div>
        <Text>{title}</Text>
      </div>
      <Slider defaultValue={defaultValue} onChange={handleChange} />
    </div>
  )
}

export default RecSlider
