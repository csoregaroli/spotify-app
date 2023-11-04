const { doc, getDoc, collection, writeBatch } = require('firebase/firestore')
const db = require('../../services/firebase')

async function addRecsToFirestore(userId, recommendedTracks) {
  const userRef = doc(db, 'users', userId)
  const recRef = collection(userRef, 'recommendations')
  const batch = writeBatch(db)

  //check for tracks

  //create new tracks

  //check for recs

  //create new recs
  for (track of recommendedTracks) {
    const recSnapshot = await getDoc(doc(recRef, track.id))
    if (!recSnapshot.exists()) {
      batch.set(doc(recRef, track.id), track)
    }
  }

  try {
    return await batch.commit()
  } catch (err) {
    console.log(err)
    return err
  }
}

module.exports = {
  addRecsToFirestore,
}
