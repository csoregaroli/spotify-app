import { useState } from 'react'
import { Slider, Typography } from 'antd'
const { Title } = Typography

const RecSlider = () => {
  const defaultValue = 50
  const [target, setTarget] = useState(defaultValue)

  const handleChange = (value) => {
    setTarget(value)
  }

  return <Slider defaultValue={defaultValue} onChange={handleChange} />
}

export default RecSlider
