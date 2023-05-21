import { useState, useEffect } from 'react'
import { Select } from 'antd'

import { getGenres } from '../api/reads'

const SelectGenres = () => {
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(null)

  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await getGenres()
      const genreOptions = genreData.map((genre) => ({
        value: genre.seed,
        label: genre.name,
      }))
      console.log(1)
      setGenres(genreOptions)
    }

    fetchGenres()
  }, [])

  const handleChange = (value) => {
    setSelectedGenre(value)
  }

  return (
    <Select
      placeholder='Select a genre'
      options={genres}
      style={{ width: '100%' }}
      onChange={handleChange}
    />
  )
}

export default SelectGenres
