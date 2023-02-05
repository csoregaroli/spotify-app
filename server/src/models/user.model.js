const { getDoc, setDoc, doc } = require('firebase/firestore')

const db = require('../services/firebase')

async function getUserDocumentFromAuth(profile) {
  if (!profile) return

  const userRef = doc(db, 'users', profile.id)

  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists()) {
    const { displayName, provider, username, photos, followers, emails } =
      profile

    try {
      await setDoc(userRef, {
        displayName,
        provider,
        username,
        photo: photos[0].value,
        followers,
        email: emails[0].value,
        created: new Date(),
      })
    } catch (error) {
      console.log('error creating the user')
    }
  }

  return userSnapshot
}

async function getUserById(id) {
  if (!id) return

  const userDocRef = doc(db, 'users', id)
  const userSnapshot = await getDoc(userDocRef)

  return userSnapshot
}

module.exports = { getUserDocumentFromAuth, getUserById }
