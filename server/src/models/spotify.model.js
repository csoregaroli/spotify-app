const { getDoc, doc, collection, batch } = require('firebase/firestore')
const db = require('../services/firebase')

async function addRecsToFirestore(userId, recommendedTracks) {
  const userRef = doc(db, 'users', userId)
  const recCollectionRef = collection(userRef, 'recommendations')

  recommendedTracks.forEach(async (track) => {
    const recSnapshot = await getDoc(recCollectionRef, track.id)
    if (!recSnapshot.exists()) {
      batch.set(doc(recCollectionRef, track.id), track)
    }
  })

  try {
    const response = await batch.commit()
    console.log(response)
    return response
  } catch (err) {
    console.log(err)
    return err
  }
}

module.exports = { addRecsToFirestore }
