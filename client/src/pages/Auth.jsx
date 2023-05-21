import { useState, useEffect } from 'react'
import { Typography } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import { SIGNUP, SIGNIN } from '../constants/routes'
import SpotifyButton from '../components/Auth/SpotifyButton'

const { Title, Text, Link } = Typography

export const Auth = () => {
  const [copy, setCopy] = useState()
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const imageSrc =
    'https://images.unsplash.com/photo-1633329102202-eaa697179563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3213&q=80'

  const signUp = {
    header: "Let's get started",
    subheader: 'Welcome to Songbird! Your music analytics dashboard.',
    buttonCta: 'Sign up with Spotify',
    switchPathCopy: 'Already have an account? ',
    switchPathCta: 'Sign in',
    pathUrl: '/signin',
  }

  const signIn = {
    header: 'Welcome back!',
    subheader: 'Welcome back! Please sign in to continue.',
    buttonCta: 'Continue with Spotify',
    switchPathCopy: "Don't have an account? ",
    switchPathCta: 'Sign up',
    pathUrl: '/signup',
  }

  useEffect(() => {
    if (path === SIGNUP) {
      setCopy(signUp)
    } else if (path === SIGNIN) {
      setCopy(signIn)
    }
  }, [path])

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <div
        style={{
          width: '50vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-32px',
          marginBottom: '-32px',
          marginLeft: '-32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Title style={{ marginTop: '0px', marginBottom: '16px' }}>
            {copy?.header}
          </Title>
          <Text type='secondary'>{copy?.subheader}</Text>
          <SpotifyButton cta={copy?.buttonCta} />
          <Text type='secondary' style={{ cursor: 'pointer' }}>
            {copy?.switchPathCopy}
            <Link
              onClick={() => {
                navigate(`${copy?.pathUrl}`)
              }}
            >
              {copy?.switchPathCta}
            </Link>
          </Text>
        </div>
      </div>
      <div
        style={{
          width: '50vw',
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '70px 0px 0px 70px',
          marginTop: '-32px',
          marginBottom: '-32px',
          marginRight: '-32px',
        }}
      />
    </div>
  )
}
