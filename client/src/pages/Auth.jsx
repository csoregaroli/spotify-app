import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SIGNUP, SIGNIN } from '../constants/routes'

import AuthPrompt from '../components/Auth/AuthPrompt'
import { Image } from 'antd'

export const Auth = () => {
  const [copy, setCopy] = useState()
  const location = useLocation()
  const path = location.pathname

  const imageSrc =
    'https://images.unsplash.com/photo-1633329102202-eaa697179563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3213&q=80'

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
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <div style={{ width: '50%' }}>
        <AuthPrompt copy={copy} />
      </div>
      <div
        style={{
          width: '50vw',
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '30px 0px 0px 30px',
          marginTop: '-32px',
          marginBottom: '-32px',
          marginRight: '-32px',
        }}
      />
    </div>
  )
}
