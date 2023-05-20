import RecSlider from './RecSlider'

const options = [
  'Acousticness',
  'Danceability',
  'Energy',
  'Instrumentalness',
  'Popularity',
]

const RecOptions = () => {
  return (
    <div>
      {options.map((option) => (
        <RecSlider title={option} />
      ))}
    </div>
  )
}

export default RecOptions
