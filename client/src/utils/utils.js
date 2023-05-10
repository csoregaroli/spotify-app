export const convertGenreSeedToGenre = (genreSeed) => {
  const genreSeedInTitleCase =
    genreSeed.charAt(0).toUpperCase() + genreSeed.slice(1)
  const genre = genreSeedInTitleCase.replace(/-/g, ' ')
  return genre
}
