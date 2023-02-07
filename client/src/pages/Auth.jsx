import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SIGNUP, SIGNIN } from '../constants/routes'

import AuthPrompt from '../components/Auth/AuthPrompt'

export const Auth = () => {
  const [copy, setCopy] = useState()
  const location = useLocation()
  const path = location.pathname

  const signUpCopy = {
    header: 'Create a free account',
    subheader: 'placeholder',
    buttonCta: 'Sign up with Spotify',
  }

  const signInCopy = {
    header: 'Welcome back',
    subheader: 'placeholder',
    buttonCta: 'Continue with Spotify',
  }

  useEffect(() => {
    if (path === SIGNUP) {
      setCopy(signUpCopy)
    } else if (path === SIGNIN) {
      setCopy(signInCopy)
    }
  }, [path])

  return (
    <div>
      <AuthPrompt copy={copy} />
    </div>
  )
}
