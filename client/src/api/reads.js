import axios from 'axios'
import { getDoc, doc } from 'firebase/firestore'

import db from './firebase/firebaseConfig'

import { url } from '../constants/routes'

export const getAuthUser = async () => {
  const response = await axios.get(url + '/user', { withCredentials: true })
  return response
}

export const getCurrentUser = async (id) => {
  if (!id) return

  const userDocRef = doc(db, 'users', id)
  const userSnapshot = await getDoc(userDocRef)

  return userSnapshot.data()
}