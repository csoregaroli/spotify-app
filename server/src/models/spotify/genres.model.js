const {
  collection,
  query,
  where,
  getDocs,
  addDoc,
} = require('firebase/firestore')
const db = require('../../services/firebase')

async function checkIfGenreExists(genre) {
  const genresRef = collection(db, 'genres')
  const q = query(genresRef, where('seed', '==', genre))

  const querySnapshot = await getDocs(q)

  return !querySnapshot.empty
}

async function addGenresToFirestore(genres) {
  for (const genre of genres) {
    const genreExists = await checkIfGenreExists(genre)
    if (genreExists) continue

    const genresRef = collection(db, 'genres')
    await addDoc(genresRef, { seed: genre })
  }
}

module.exports = {
  addGenresToFirestore,
}
