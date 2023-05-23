import { useState, useEffect } from 'react'
import { Select, Typography } from 'antd'

import { getGenres } from '../api/reads'

const SelectGenres = ({ cb }) => {
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

  const handleChange = (value) => {
    cb(value)
  }

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        <Typography.Text>Select a genre</Typography.Text>
      </div>
      <Select
        placeholder='Select a genre'
        options={genres}
        style={{ width: '100%' }}
        onChange={handleChange}
      />
    </div>
  )
}

export default SelectGenres
