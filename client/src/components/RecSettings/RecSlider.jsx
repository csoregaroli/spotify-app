import { Slider, Typography } from 'antd'
const { Text } = Typography

const RecSlider = ({ title, cb }) => {
  const defaultValue = 50

  const handleChange = (value) => {
    cb(title.toLowerCase(), value)
  }

  return (
    <div style={{ marginTop: '16px' }}>
      <div>
        <Text>Target {title}</Text>
      </div>
      <Slider defaultValue={defaultValue} onChange={handleChange} />
    </div>
  )
}

export default RecSlider
