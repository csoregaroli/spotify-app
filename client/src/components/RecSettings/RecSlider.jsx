import { useState } from 'react'
import { Slider, Typography } from 'antd'
const { Title } = Typography

const RecSlider = ({ title }) => {
  const defaultValue = 50
  const [target, setTarget] = useState(defaultValue)

  const handleChange = (value) => {
    setTarget(value)
  }

  return (
    <div>
      <div>
        <Title level={5}>Target {title}</Title>
      </div>
      <Slider defaultValue={defaultValue} onChange={handleChange} />
    </div>
  )
}

export default RecSlider
