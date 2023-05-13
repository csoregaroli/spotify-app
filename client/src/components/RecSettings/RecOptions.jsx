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
        <div>
          <RecSlider title={option} />
        </div>
      ))}
    </div>
  )
}

export default RecOptions
