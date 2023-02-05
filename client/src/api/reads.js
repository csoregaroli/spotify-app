import axios from 'axios'

import { url } from '../constants/routes'

export const getAuthUser = async () => {
  const response = await axios.get(url + '/user', { withCredentials: true })
  return response
}

export const getCurrentUser = async () => {}
