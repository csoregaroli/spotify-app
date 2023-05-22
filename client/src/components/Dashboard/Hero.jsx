import { Typography } from 'antd'

export const Hero = ({ titleText }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography.Text strong={true} style={{ fontSize: '24px' }}>
          {titleText}
        </Typography.Text>
      </div>
    </div>
  )
}
