import axios from 'axios'

import { url } from '../constants/routes'

export const getCurrentUser = async () => {
  const user = await axios.get(url + '/user', { withCredentials: true })
  console.log('from req', user)
  //   const user = await response.json()
  return user
}
