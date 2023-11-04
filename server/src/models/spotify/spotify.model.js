const { doc, getDoc, collection, writeBatch } = require('firebase/firestore')
const db = require('../../services/firebase')

async function addRecsToFirestore(userId, recommendedTracks) {
  const batch = writeBatch(db)

  //Check the "tracks" collection and add new tracks if they don't exist
  const tracksCollectionRef = collection(db, 'tracks')
  for (track of recommendedTracks) {
    const trackDocRef = doc(tracksCollectionRef, track.id)
    console.log(trackDocRef)
    const trackSnapshot = await getDoc(trackDocRef)
    if (!trackSnapshot.exists()) {
      batch.set(trackDocRef, track)
    }
  }

  //Check the "recommendations" subcollection and add new recommendations if they don't exist
  const recommendationsCollectionRef = collection(
    db,
    `users/${userId}/recommendations`
  )
  for (track of recommendedTracks) {
    const recommendationDocRef = doc(recommendationsCollectionRef, track.id)
    const recommendationDoc = await getDoc(recommendationDocRef)
    if (!recommendationDoc.exists()) {
      batch.set(recommendationDocRef, {
        id: track.id,
        created: new Date(),
      })
    }
  }

  // Commit the batch
  try {
    console.log('Track recommendations updated successfully.')
    return await batch.commit()
  } catch (error) {
    console.error('Error updating track recommendations:', error)
    throw error
  }
}

module.exports = {
  addRecsToFirestore,
}
