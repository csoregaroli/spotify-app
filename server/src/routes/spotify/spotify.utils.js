const convertArtistsToArray = (artists) => {
  const artistsArray = []

  artists.forEach((artist) => {
    artistsArray.push(artist.name)
  })

  return artistsArray
}

module.exports = { convertArtistsToArray }
