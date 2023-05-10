import { useState, useEffect } from 'react'
import { Select } from 'antd'

import { getGenres } from '../api/reads'

const Genres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await getGenres()
      const genreOptions = genreData.map((genre) => ({
        value: genre.seed,
        label: genre.name,
      }))
      setGenres(genreOptions)
    }

    fetchGenres()
  }, [])

  return (
    <Select
      placeholder='Select a genre'
      options={genres}
      style={{ width: '100%' }}
    />
  )
}

export default Genres
